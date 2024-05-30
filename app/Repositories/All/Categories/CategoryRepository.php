<?php


namespace App\Repositories\All\Categories;

use App\Models\Category;
use App\Repositories\Base\BaseRepository;



class CategoryRepository extends BaseRepository implements CategoryInterface
{

    /**
     * @var Category
     */
    protected $model;

    /**
     * @param Category $model
     */
    public function __construct(Category $model)
    {
        $this->model = $model;
    }
}
