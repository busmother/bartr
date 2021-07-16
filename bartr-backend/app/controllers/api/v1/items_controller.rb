class Api::V1::ItemsController < Api::V1::ApplicationController

    def index
        user = User.find(params[:user_id])
        order = user.orders.last #this is a stopgap until we have more order functionality
        items = order.items
        render json: ItemSerializer.new(items)
    end

    def create
        item = Item.new(order_id: params[:order_id], product_id: params[:id])
        product_id = params[:id]
        if item.save
            render json: ItemSerializer.new(item)
        else
            render json: {errors: item.errors.full_messages}
        end
    end

    def destroy
        @item = Item.find(params[:id])
        @item.destroy
    end

end
