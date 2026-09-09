import Alpine from 'alpinejs'

const colorScheme = window.matchMedia('(prefers-color-scheme: dark)')
const themeStorageKey = 'cool-writings-theme'
const validTheme = (value) => ['light', 'dark'].includes(value) ? value : null

Alpine.store('theme', {
    dark: false,
    preference: null,
    init() {
        try {
            this.preference = validTheme(localStorage.getItem(themeStorageKey))
        } catch {}
        this.apply()
        colorScheme.addEventListener('change', () => {
            if (!this.preference) this.apply()
        })
        window.addEventListener('storage', (event) => {
            if (event.key !== themeStorageKey && event.key !== null) return
            this.preference = validTheme(event.newValue)
            this.apply()
        })
    },
    toggle() {
        this.preference = this.dark ? 'light' : 'dark'
        try {
            localStorage.setItem(themeStorageKey, this.preference)
        } catch {}
        this.apply()
    },
    apply() {
        this.dark = this.preference ? this.preference === 'dark' : colorScheme.matches
        const theme = this.dark ? 'dark' : 'light'
        document.documentElement.dataset.theme = theme
        document.querySelectorAll('source[data-theme-dark]').forEach((source) => {
            source.media = this.dark ? 'all' : 'not all'
        })
        document.querySelectorAll('meta[data-theme-color]').forEach((meta) => {
            meta.media = meta.dataset.themeColor === theme ? 'all' : 'not all'
        })
    },
})

Alpine.data('navigation', () => ({
    open: false,
    searchOpen: false,
    desktop: false,
    media: null,
    sync: null,
    init() {
        this.media = window.matchMedia('(min-width: 64rem)')
        this.sync = () => {
            const desktopChanged = this.desktop !== this.media.matches
            this.desktop = this.media.matches
            if (desktopChanged) this.closeSearch()
            if (this.desktop) this.open = false
            else if (
                !this.open &&
                this.$refs.links.contains(document.activeElement)
            )
                this.$refs.toggle.focus()
        }
        this.sync()
        this.media.addEventListener('change', this.sync)
    },
    openSearch() {
        this.open = false
        this.searchOpen = true
        this.focusSearch()
    },
    focusSearch() {
        this.$nextTick(() => {
            this.$refs[
                this.desktop ? 'desktopSearchInput' : 'mobileSearchInput'
            ].focus()
        })
    },
    closeSearch(restoreFocus = true) {
        if (!this.searchOpen) return
        this.searchOpen = false
        if (restoreFocus)
            this.$refs[
                this.desktop ? 'desktopSearchButton' : 'mobileSearchButton'
            ].focus()
    },
    close() {
        if (this.searchOpen) {
            this.closeSearch()
            return
        }
        if (!this.open) return
        this.open = false
        this.$refs.toggle.focus()
    },
    destroy() {
        this.media.removeEventListener('change', this.sync)
    },
}))

Alpine.start()
