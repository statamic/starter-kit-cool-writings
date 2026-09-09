<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Statamic\Facades\Entry;
use Statamic\View\View;

Route::get('search', function (Request $request) {
    $query = $request->query('q', '');
    $query = is_string($query) ? mb_substr(trim($query), 0, 200) : '';

    return View::make('search', [
        'title' => 'Search',
        'search_query' => $query,
        'has_search_query' => $query !== '',
        // An empty collection has no local index to query yet.
        'has_articles' => Entry::query()->where('collection', 'articles')->whereStatus('published')->exists(),
    ])->layout('layout')->render();
})->middleware('statamic.web');
