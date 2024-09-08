import { CreateOrderDTO } from './dto/create-order.dto';
import { Order } from './interfaces/order.interface';
import { OrderService } from './order.service';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    getOrders(): Promise<Order[]>;
    createOrder(req: any, order: CreateOrderDTO): Promise<Order>;
}
