class Api::V1::OrdersController < Api::V1::ApplicationController

    def index
        user = User.find(params[:user_id])
        orders = user.orders
        render json: OrderSerializer.new(orders)
    end

    def create
        order = Order.new(order_params)
        user = User.find_or_create_by(id: order_params[:user_id])
        order.user = user
        if order.save && user.save
            render json: OrderSerializer.new(order)
        else
            render json: {errors: message.errors.full_messages}, status: :unprocessible_entity
        end
    end

    def show
        order = Order.find_by(user_id: params[:user_id], open: true)
        render json: OrderSerializer.new(order)
    end

    def update
        order_to_update = Order.find(params[:order_id])
        order_to_update.update(open: false, recipient: params[:recipient], street_address: params[:street_address], city: params[:city], state: params[:state], zip_code: params[:zip_code])
        order = Order.create(user_id: params[:user_id])
        render json: OrderSerializer.new(order)
    end

    private

    def order_params
        params.require(:order).permit(:user_id, :open, :recipient, :street_address, :city, :state, :zip_code)
    end

end
