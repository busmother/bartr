class Api::V1::ProductsController < Api::V1::ApplicationController

    def index
        products = Product.all
        render json: ProductSerializer.new(products)
    end

end
