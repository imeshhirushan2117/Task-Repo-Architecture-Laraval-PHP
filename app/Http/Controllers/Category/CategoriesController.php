<?php

namespace App\Http\Controllers\Category;

use App\Http\Controllers\Controller;
use App\Http\Resources\CategoryResource;
use App\Models\Category;
use App\Repositories\All\Categories\CategoryInterface;
use Illuminate\Http\Request;
use Inertia\Inertia;
use PhpParser\Node\Expr\Cast\String_;

class CategoriesController extends Controller
{

    public function __construct(
        protected CategoryInterface $categoryInterface,
    ) {
    }

    /**
     * Display a listing of the resource.
     */


    public function index()
    {
        return Inertia::render('Categories/All/Index', [
            "categories" => $this->categoryInterface->all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Categories/Create/Index');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $this->categoryInterface->create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $category = $this->categoryInterface->findById($id);
        return Inertia::render('Categories/Edit/Index', [
            'categories' => $category,
        ]);

        // return Inertia::render('Categories/Edit/Index', [
        //     'category' => new CategoryResource($category),
        // ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $this->categoryInterface->update($id, $request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $this->categoryInterface->deleteById($id);
    }
}
