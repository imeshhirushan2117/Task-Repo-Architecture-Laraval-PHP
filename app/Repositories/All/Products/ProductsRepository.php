<?php


namespace App\Repositories\All\Products;

use App\Models\Product;
use App\Repositories\All\Products\ProductsInterface;
use App\Repositories\Base\BaseRepository;



class ProductsRepository extends BaseRepository implements ProductsInterface
{

    /**
     * @var Product
     */
    protected $model;

    /**
     * @param Product $model
     */
    public function __construct(Product $model)
    {
        $this->model = $model;
    }
}
