import { Model } from 'mongoose';
import { CreateOrderDTO } from './dto/create-order.dto';
import { Order } from './interfaces/order.interface';
export declare class OrderService {
    private readonly orderModel;
    constructor(orderModel: Model<Order>);
    getOrders(): Promise<Order[]>;
    createOrder(createOrderDTO: CreateOrderDTO, id?: any): Promise<Order>;
}
