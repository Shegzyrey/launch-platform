import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model OrderEventOutbox
 *
 */
export type OrderEventOutboxModel = runtime.Types.Result.DefaultSelection<Prisma.$OrderEventOutboxPayload>;
export type AggregateOrderEventOutbox = {
    _count: OrderEventOutboxCountAggregateOutputType | null;
    _min: OrderEventOutboxMinAggregateOutputType | null;
    _max: OrderEventOutboxMaxAggregateOutputType | null;
};
export type OrderEventOutboxMinAggregateOutputType = {
    id: string | null;
    eventId: string | null;
    orderId: string | null;
    eventType: string | null;
    publishedAt: Date | null;
    createdAt: Date | null;
};
export type OrderEventOutboxMaxAggregateOutputType = {
    id: string | null;
    eventId: string | null;
    orderId: string | null;
    eventType: string | null;
    publishedAt: Date | null;
    createdAt: Date | null;
};
export type OrderEventOutboxCountAggregateOutputType = {
    id: number;
    eventId: number;
    orderId: number;
    eventType: number;
    payloadJson: number;
    publishedAt: number;
    createdAt: number;
    _all: number;
};
export type OrderEventOutboxMinAggregateInputType = {
    id?: true;
    eventId?: true;
    orderId?: true;
    eventType?: true;
    publishedAt?: true;
    createdAt?: true;
};
export type OrderEventOutboxMaxAggregateInputType = {
    id?: true;
    eventId?: true;
    orderId?: true;
    eventType?: true;
    publishedAt?: true;
    createdAt?: true;
};
export type OrderEventOutboxCountAggregateInputType = {
    id?: true;
    eventId?: true;
    orderId?: true;
    eventType?: true;
    payloadJson?: true;
    publishedAt?: true;
    createdAt?: true;
    _all?: true;
};
export type OrderEventOutboxAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which OrderEventOutbox to aggregate.
     */
    where?: Prisma.OrderEventOutboxWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OrderEventOutboxes to fetch.
     */
    orderBy?: Prisma.OrderEventOutboxOrderByWithRelationInput | Prisma.OrderEventOutboxOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.OrderEventOutboxWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OrderEventOutboxes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OrderEventOutboxes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned OrderEventOutboxes
    **/
    _count?: true | OrderEventOutboxCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: OrderEventOutboxMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: OrderEventOutboxMaxAggregateInputType;
};
export type GetOrderEventOutboxAggregateType<T extends OrderEventOutboxAggregateArgs> = {
    [P in keyof T & keyof AggregateOrderEventOutbox]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOrderEventOutbox[P]> : Prisma.GetScalarType<T[P], AggregateOrderEventOutbox[P]>;
};
export type OrderEventOutboxGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderEventOutboxWhereInput;
    orderBy?: Prisma.OrderEventOutboxOrderByWithAggregationInput | Prisma.OrderEventOutboxOrderByWithAggregationInput[];
    by: Prisma.OrderEventOutboxScalarFieldEnum[] | Prisma.OrderEventOutboxScalarFieldEnum;
    having?: Prisma.OrderEventOutboxScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrderEventOutboxCountAggregateInputType | true;
    _min?: OrderEventOutboxMinAggregateInputType;
    _max?: OrderEventOutboxMaxAggregateInputType;
};
export type OrderEventOutboxGroupByOutputType = {
    id: string;
    eventId: string;
    orderId: string;
    eventType: string;
    payloadJson: runtime.JsonValue;
    publishedAt: Date | null;
    createdAt: Date;
    _count: OrderEventOutboxCountAggregateOutputType | null;
    _min: OrderEventOutboxMinAggregateOutputType | null;
    _max: OrderEventOutboxMaxAggregateOutputType | null;
};
export type GetOrderEventOutboxGroupByPayload<T extends OrderEventOutboxGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OrderEventOutboxGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OrderEventOutboxGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OrderEventOutboxGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OrderEventOutboxGroupByOutputType[P]>;
}>>;
export type OrderEventOutboxWhereInput = {
    AND?: Prisma.OrderEventOutboxWhereInput | Prisma.OrderEventOutboxWhereInput[];
    OR?: Prisma.OrderEventOutboxWhereInput[];
    NOT?: Prisma.OrderEventOutboxWhereInput | Prisma.OrderEventOutboxWhereInput[];
    id?: Prisma.StringFilter<"OrderEventOutbox"> | string;
    eventId?: Prisma.StringFilter<"OrderEventOutbox"> | string;
    orderId?: Prisma.StringFilter<"OrderEventOutbox"> | string;
    eventType?: Prisma.StringFilter<"OrderEventOutbox"> | string;
    payloadJson?: Prisma.JsonFilter<"OrderEventOutbox">;
    publishedAt?: Prisma.DateTimeNullableFilter<"OrderEventOutbox"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"OrderEventOutbox"> | Date | string;
    order?: Prisma.XOR<Prisma.OrderScalarRelationFilter, Prisma.OrderWhereInput>;
};
export type OrderEventOutboxOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    eventType?: Prisma.SortOrder;
    payloadJson?: Prisma.SortOrder;
    publishedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    order?: Prisma.OrderOrderByWithRelationInput;
};
export type OrderEventOutboxWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    eventId?: string;
    AND?: Prisma.OrderEventOutboxWhereInput | Prisma.OrderEventOutboxWhereInput[];
    OR?: Prisma.OrderEventOutboxWhereInput[];
    NOT?: Prisma.OrderEventOutboxWhereInput | Prisma.OrderEventOutboxWhereInput[];
    orderId?: Prisma.StringFilter<"OrderEventOutbox"> | string;
    eventType?: Prisma.StringFilter<"OrderEventOutbox"> | string;
    payloadJson?: Prisma.JsonFilter<"OrderEventOutbox">;
    publishedAt?: Prisma.DateTimeNullableFilter<"OrderEventOutbox"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"OrderEventOutbox"> | Date | string;
    order?: Prisma.XOR<Prisma.OrderScalarRelationFilter, Prisma.OrderWhereInput>;
}, "id" | "eventId">;
export type OrderEventOutboxOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    eventType?: Prisma.SortOrder;
    payloadJson?: Prisma.SortOrder;
    publishedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.OrderEventOutboxCountOrderByAggregateInput;
    _max?: Prisma.OrderEventOutboxMaxOrderByAggregateInput;
    _min?: Prisma.OrderEventOutboxMinOrderByAggregateInput;
};
export type OrderEventOutboxScalarWhereWithAggregatesInput = {
    AND?: Prisma.OrderEventOutboxScalarWhereWithAggregatesInput | Prisma.OrderEventOutboxScalarWhereWithAggregatesInput[];
    OR?: Prisma.OrderEventOutboxScalarWhereWithAggregatesInput[];
    NOT?: Prisma.OrderEventOutboxScalarWhereWithAggregatesInput | Prisma.OrderEventOutboxScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"OrderEventOutbox"> | string;
    eventId?: Prisma.StringWithAggregatesFilter<"OrderEventOutbox"> | string;
    orderId?: Prisma.StringWithAggregatesFilter<"OrderEventOutbox"> | string;
    eventType?: Prisma.StringWithAggregatesFilter<"OrderEventOutbox"> | string;
    payloadJson?: Prisma.JsonWithAggregatesFilter<"OrderEventOutbox">;
    publishedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"OrderEventOutbox"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"OrderEventOutbox"> | Date | string;
};
export type OrderEventOutboxCreateInput = {
    id?: string;
    eventId: string;
    eventType: string;
    payloadJson: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    publishedAt?: Date | string | null;
    createdAt?: Date | string;
    order: Prisma.OrderCreateNestedOneWithoutEventsInput;
};
export type OrderEventOutboxUncheckedCreateInput = {
    id?: string;
    eventId: string;
    orderId: string;
    eventType: string;
    payloadJson: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    publishedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type OrderEventOutboxUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventType?: Prisma.StringFieldUpdateOperationsInput | string;
    payloadJson?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    order?: Prisma.OrderUpdateOneRequiredWithoutEventsNestedInput;
};
export type OrderEventOutboxUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventType?: Prisma.StringFieldUpdateOperationsInput | string;
    payloadJson?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderEventOutboxCreateManyInput = {
    id?: string;
    eventId: string;
    orderId: string;
    eventType: string;
    payloadJson: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    publishedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type OrderEventOutboxUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventType?: Prisma.StringFieldUpdateOperationsInput | string;
    payloadJson?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderEventOutboxUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventType?: Prisma.StringFieldUpdateOperationsInput | string;
    payloadJson?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderEventOutboxListRelationFilter = {
    every?: Prisma.OrderEventOutboxWhereInput;
    some?: Prisma.OrderEventOutboxWhereInput;
    none?: Prisma.OrderEventOutboxWhereInput;
};
export type OrderEventOutboxOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type OrderEventOutboxCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    eventType?: Prisma.SortOrder;
    payloadJson?: Prisma.SortOrder;
    publishedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type OrderEventOutboxMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    eventType?: Prisma.SortOrder;
    publishedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type OrderEventOutboxMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    eventType?: Prisma.SortOrder;
    publishedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type OrderEventOutboxCreateNestedManyWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.OrderEventOutboxCreateWithoutOrderInput, Prisma.OrderEventOutboxUncheckedCreateWithoutOrderInput> | Prisma.OrderEventOutboxCreateWithoutOrderInput[] | Prisma.OrderEventOutboxUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.OrderEventOutboxCreateOrConnectWithoutOrderInput | Prisma.OrderEventOutboxCreateOrConnectWithoutOrderInput[];
    createMany?: Prisma.OrderEventOutboxCreateManyOrderInputEnvelope;
    connect?: Prisma.OrderEventOutboxWhereUniqueInput | Prisma.OrderEventOutboxWhereUniqueInput[];
};
export type OrderEventOutboxUncheckedCreateNestedManyWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.OrderEventOutboxCreateWithoutOrderInput, Prisma.OrderEventOutboxUncheckedCreateWithoutOrderInput> | Prisma.OrderEventOutboxCreateWithoutOrderInput[] | Prisma.OrderEventOutboxUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.OrderEventOutboxCreateOrConnectWithoutOrderInput | Prisma.OrderEventOutboxCreateOrConnectWithoutOrderInput[];
    createMany?: Prisma.OrderEventOutboxCreateManyOrderInputEnvelope;
    connect?: Prisma.OrderEventOutboxWhereUniqueInput | Prisma.OrderEventOutboxWhereUniqueInput[];
};
export type OrderEventOutboxUpdateManyWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.OrderEventOutboxCreateWithoutOrderInput, Prisma.OrderEventOutboxUncheckedCreateWithoutOrderInput> | Prisma.OrderEventOutboxCreateWithoutOrderInput[] | Prisma.OrderEventOutboxUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.OrderEventOutboxCreateOrConnectWithoutOrderInput | Prisma.OrderEventOutboxCreateOrConnectWithoutOrderInput[];
    upsert?: Prisma.OrderEventOutboxUpsertWithWhereUniqueWithoutOrderInput | Prisma.OrderEventOutboxUpsertWithWhereUniqueWithoutOrderInput[];
    createMany?: Prisma.OrderEventOutboxCreateManyOrderInputEnvelope;
    set?: Prisma.OrderEventOutboxWhereUniqueInput | Prisma.OrderEventOutboxWhereUniqueInput[];
    disconnect?: Prisma.OrderEventOutboxWhereUniqueInput | Prisma.OrderEventOutboxWhereUniqueInput[];
    delete?: Prisma.OrderEventOutboxWhereUniqueInput | Prisma.OrderEventOutboxWhereUniqueInput[];
    connect?: Prisma.OrderEventOutboxWhereUniqueInput | Prisma.OrderEventOutboxWhereUniqueInput[];
    update?: Prisma.OrderEventOutboxUpdateWithWhereUniqueWithoutOrderInput | Prisma.OrderEventOutboxUpdateWithWhereUniqueWithoutOrderInput[];
    updateMany?: Prisma.OrderEventOutboxUpdateManyWithWhereWithoutOrderInput | Prisma.OrderEventOutboxUpdateManyWithWhereWithoutOrderInput[];
    deleteMany?: Prisma.OrderEventOutboxScalarWhereInput | Prisma.OrderEventOutboxScalarWhereInput[];
};
export type OrderEventOutboxUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.OrderEventOutboxCreateWithoutOrderInput, Prisma.OrderEventOutboxUncheckedCreateWithoutOrderInput> | Prisma.OrderEventOutboxCreateWithoutOrderInput[] | Prisma.OrderEventOutboxUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.OrderEventOutboxCreateOrConnectWithoutOrderInput | Prisma.OrderEventOutboxCreateOrConnectWithoutOrderInput[];
    upsert?: Prisma.OrderEventOutboxUpsertWithWhereUniqueWithoutOrderInput | Prisma.OrderEventOutboxUpsertWithWhereUniqueWithoutOrderInput[];
    createMany?: Prisma.OrderEventOutboxCreateManyOrderInputEnvelope;
    set?: Prisma.OrderEventOutboxWhereUniqueInput | Prisma.OrderEventOutboxWhereUniqueInput[];
    disconnect?: Prisma.OrderEventOutboxWhereUniqueInput | Prisma.OrderEventOutboxWhereUniqueInput[];
    delete?: Prisma.OrderEventOutboxWhereUniqueInput | Prisma.OrderEventOutboxWhereUniqueInput[];
    connect?: Prisma.OrderEventOutboxWhereUniqueInput | Prisma.OrderEventOutboxWhereUniqueInput[];
    update?: Prisma.OrderEventOutboxUpdateWithWhereUniqueWithoutOrderInput | Prisma.OrderEventOutboxUpdateWithWhereUniqueWithoutOrderInput[];
    updateMany?: Prisma.OrderEventOutboxUpdateManyWithWhereWithoutOrderInput | Prisma.OrderEventOutboxUpdateManyWithWhereWithoutOrderInput[];
    deleteMany?: Prisma.OrderEventOutboxScalarWhereInput | Prisma.OrderEventOutboxScalarWhereInput[];
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type OrderEventOutboxCreateWithoutOrderInput = {
    id?: string;
    eventId: string;
    eventType: string;
    payloadJson: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    publishedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type OrderEventOutboxUncheckedCreateWithoutOrderInput = {
    id?: string;
    eventId: string;
    eventType: string;
    payloadJson: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    publishedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type OrderEventOutboxCreateOrConnectWithoutOrderInput = {
    where: Prisma.OrderEventOutboxWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderEventOutboxCreateWithoutOrderInput, Prisma.OrderEventOutboxUncheckedCreateWithoutOrderInput>;
};
export type OrderEventOutboxCreateManyOrderInputEnvelope = {
    data: Prisma.OrderEventOutboxCreateManyOrderInput | Prisma.OrderEventOutboxCreateManyOrderInput[];
    skipDuplicates?: boolean;
};
export type OrderEventOutboxUpsertWithWhereUniqueWithoutOrderInput = {
    where: Prisma.OrderEventOutboxWhereUniqueInput;
    update: Prisma.XOR<Prisma.OrderEventOutboxUpdateWithoutOrderInput, Prisma.OrderEventOutboxUncheckedUpdateWithoutOrderInput>;
    create: Prisma.XOR<Prisma.OrderEventOutboxCreateWithoutOrderInput, Prisma.OrderEventOutboxUncheckedCreateWithoutOrderInput>;
};
export type OrderEventOutboxUpdateWithWhereUniqueWithoutOrderInput = {
    where: Prisma.OrderEventOutboxWhereUniqueInput;
    data: Prisma.XOR<Prisma.OrderEventOutboxUpdateWithoutOrderInput, Prisma.OrderEventOutboxUncheckedUpdateWithoutOrderInput>;
};
export type OrderEventOutboxUpdateManyWithWhereWithoutOrderInput = {
    where: Prisma.OrderEventOutboxScalarWhereInput;
    data: Prisma.XOR<Prisma.OrderEventOutboxUpdateManyMutationInput, Prisma.OrderEventOutboxUncheckedUpdateManyWithoutOrderInput>;
};
export type OrderEventOutboxScalarWhereInput = {
    AND?: Prisma.OrderEventOutboxScalarWhereInput | Prisma.OrderEventOutboxScalarWhereInput[];
    OR?: Prisma.OrderEventOutboxScalarWhereInput[];
    NOT?: Prisma.OrderEventOutboxScalarWhereInput | Prisma.OrderEventOutboxScalarWhereInput[];
    id?: Prisma.StringFilter<"OrderEventOutbox"> | string;
    eventId?: Prisma.StringFilter<"OrderEventOutbox"> | string;
    orderId?: Prisma.StringFilter<"OrderEventOutbox"> | string;
    eventType?: Prisma.StringFilter<"OrderEventOutbox"> | string;
    payloadJson?: Prisma.JsonFilter<"OrderEventOutbox">;
    publishedAt?: Prisma.DateTimeNullableFilter<"OrderEventOutbox"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"OrderEventOutbox"> | Date | string;
};
export type OrderEventOutboxCreateManyOrderInput = {
    id?: string;
    eventId: string;
    eventType: string;
    payloadJson: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    publishedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type OrderEventOutboxUpdateWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventType?: Prisma.StringFieldUpdateOperationsInput | string;
    payloadJson?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderEventOutboxUncheckedUpdateWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventType?: Prisma.StringFieldUpdateOperationsInput | string;
    payloadJson?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderEventOutboxUncheckedUpdateManyWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventType?: Prisma.StringFieldUpdateOperationsInput | string;
    payloadJson?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderEventOutboxSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    eventId?: boolean;
    orderId?: boolean;
    eventType?: boolean;
    payloadJson?: boolean;
    publishedAt?: boolean;
    createdAt?: boolean;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["orderEventOutbox"]>;
export type OrderEventOutboxSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    eventId?: boolean;
    orderId?: boolean;
    eventType?: boolean;
    payloadJson?: boolean;
    publishedAt?: boolean;
    createdAt?: boolean;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["orderEventOutbox"]>;
export type OrderEventOutboxSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    eventId?: boolean;
    orderId?: boolean;
    eventType?: boolean;
    payloadJson?: boolean;
    publishedAt?: boolean;
    createdAt?: boolean;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["orderEventOutbox"]>;
export type OrderEventOutboxSelectScalar = {
    id?: boolean;
    eventId?: boolean;
    orderId?: boolean;
    eventType?: boolean;
    payloadJson?: boolean;
    publishedAt?: boolean;
    createdAt?: boolean;
};
export type OrderEventOutboxOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "eventId" | "orderId" | "eventType" | "payloadJson" | "publishedAt" | "createdAt", ExtArgs["result"]["orderEventOutbox"]>;
export type OrderEventOutboxInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
};
export type OrderEventOutboxIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
};
export type OrderEventOutboxIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
};
export type $OrderEventOutboxPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "OrderEventOutbox";
    objects: {
        order: Prisma.$OrderPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        eventId: string;
        orderId: string;
        eventType: string;
        payloadJson: runtime.JsonValue;
        publishedAt: Date | null;
        createdAt: Date;
    }, ExtArgs["result"]["orderEventOutbox"]>;
    composites: {};
};
export type OrderEventOutboxGetPayload<S extends boolean | null | undefined | OrderEventOutboxDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OrderEventOutboxPayload, S>;
export type OrderEventOutboxCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<OrderEventOutboxFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OrderEventOutboxCountAggregateInputType | true;
};
export interface OrderEventOutboxDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['OrderEventOutbox'];
        meta: {
            name: 'OrderEventOutbox';
        };
    };
    /**
     * Find zero or one OrderEventOutbox that matches the filter.
     * @param {OrderEventOutboxFindUniqueArgs} args - Arguments to find a OrderEventOutbox
     * @example
     * // Get one OrderEventOutbox
     * const orderEventOutbox = await prisma.orderEventOutbox.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderEventOutboxFindUniqueArgs>(args: Prisma.SelectSubset<T, OrderEventOutboxFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OrderEventOutboxClient<runtime.Types.Result.GetResult<Prisma.$OrderEventOutboxPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one OrderEventOutbox that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderEventOutboxFindUniqueOrThrowArgs} args - Arguments to find a OrderEventOutbox
     * @example
     * // Get one OrderEventOutbox
     * const orderEventOutbox = await prisma.orderEventOutbox.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderEventOutboxFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OrderEventOutboxFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrderEventOutboxClient<runtime.Types.Result.GetResult<Prisma.$OrderEventOutboxPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first OrderEventOutbox that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderEventOutboxFindFirstArgs} args - Arguments to find a OrderEventOutbox
     * @example
     * // Get one OrderEventOutbox
     * const orderEventOutbox = await prisma.orderEventOutbox.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderEventOutboxFindFirstArgs>(args?: Prisma.SelectSubset<T, OrderEventOutboxFindFirstArgs<ExtArgs>>): Prisma.Prisma__OrderEventOutboxClient<runtime.Types.Result.GetResult<Prisma.$OrderEventOutboxPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first OrderEventOutbox that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderEventOutboxFindFirstOrThrowArgs} args - Arguments to find a OrderEventOutbox
     * @example
     * // Get one OrderEventOutbox
     * const orderEventOutbox = await prisma.orderEventOutbox.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderEventOutboxFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OrderEventOutboxFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrderEventOutboxClient<runtime.Types.Result.GetResult<Prisma.$OrderEventOutboxPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more OrderEventOutboxes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderEventOutboxFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderEventOutboxes
     * const orderEventOutboxes = await prisma.orderEventOutbox.findMany()
     *
     * // Get first 10 OrderEventOutboxes
     * const orderEventOutboxes = await prisma.orderEventOutbox.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const orderEventOutboxWithIdOnly = await prisma.orderEventOutbox.findMany({ select: { id: true } })
     *
     */
    findMany<T extends OrderEventOutboxFindManyArgs>(args?: Prisma.SelectSubset<T, OrderEventOutboxFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderEventOutboxPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a OrderEventOutbox.
     * @param {OrderEventOutboxCreateArgs} args - Arguments to create a OrderEventOutbox.
     * @example
     * // Create one OrderEventOutbox
     * const OrderEventOutbox = await prisma.orderEventOutbox.create({
     *   data: {
     *     // ... data to create a OrderEventOutbox
     *   }
     * })
     *
     */
    create<T extends OrderEventOutboxCreateArgs>(args: Prisma.SelectSubset<T, OrderEventOutboxCreateArgs<ExtArgs>>): Prisma.Prisma__OrderEventOutboxClient<runtime.Types.Result.GetResult<Prisma.$OrderEventOutboxPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many OrderEventOutboxes.
     * @param {OrderEventOutboxCreateManyArgs} args - Arguments to create many OrderEventOutboxes.
     * @example
     * // Create many OrderEventOutboxes
     * const orderEventOutbox = await prisma.orderEventOutbox.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends OrderEventOutboxCreateManyArgs>(args?: Prisma.SelectSubset<T, OrderEventOutboxCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many OrderEventOutboxes and returns the data saved in the database.
     * @param {OrderEventOutboxCreateManyAndReturnArgs} args - Arguments to create many OrderEventOutboxes.
     * @example
     * // Create many OrderEventOutboxes
     * const orderEventOutbox = await prisma.orderEventOutbox.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many OrderEventOutboxes and only return the `id`
     * const orderEventOutboxWithIdOnly = await prisma.orderEventOutbox.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends OrderEventOutboxCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, OrderEventOutboxCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderEventOutboxPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a OrderEventOutbox.
     * @param {OrderEventOutboxDeleteArgs} args - Arguments to delete one OrderEventOutbox.
     * @example
     * // Delete one OrderEventOutbox
     * const OrderEventOutbox = await prisma.orderEventOutbox.delete({
     *   where: {
     *     // ... filter to delete one OrderEventOutbox
     *   }
     * })
     *
     */
    delete<T extends OrderEventOutboxDeleteArgs>(args: Prisma.SelectSubset<T, OrderEventOutboxDeleteArgs<ExtArgs>>): Prisma.Prisma__OrderEventOutboxClient<runtime.Types.Result.GetResult<Prisma.$OrderEventOutboxPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one OrderEventOutbox.
     * @param {OrderEventOutboxUpdateArgs} args - Arguments to update one OrderEventOutbox.
     * @example
     * // Update one OrderEventOutbox
     * const orderEventOutbox = await prisma.orderEventOutbox.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends OrderEventOutboxUpdateArgs>(args: Prisma.SelectSubset<T, OrderEventOutboxUpdateArgs<ExtArgs>>): Prisma.Prisma__OrderEventOutboxClient<runtime.Types.Result.GetResult<Prisma.$OrderEventOutboxPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more OrderEventOutboxes.
     * @param {OrderEventOutboxDeleteManyArgs} args - Arguments to filter OrderEventOutboxes to delete.
     * @example
     * // Delete a few OrderEventOutboxes
     * const { count } = await prisma.orderEventOutbox.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends OrderEventOutboxDeleteManyArgs>(args?: Prisma.SelectSubset<T, OrderEventOutboxDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more OrderEventOutboxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderEventOutboxUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderEventOutboxes
     * const orderEventOutbox = await prisma.orderEventOutbox.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends OrderEventOutboxUpdateManyArgs>(args: Prisma.SelectSubset<T, OrderEventOutboxUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more OrderEventOutboxes and returns the data updated in the database.
     * @param {OrderEventOutboxUpdateManyAndReturnArgs} args - Arguments to update many OrderEventOutboxes.
     * @example
     * // Update many OrderEventOutboxes
     * const orderEventOutbox = await prisma.orderEventOutbox.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more OrderEventOutboxes and only return the `id`
     * const orderEventOutboxWithIdOnly = await prisma.orderEventOutbox.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends OrderEventOutboxUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, OrderEventOutboxUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderEventOutboxPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one OrderEventOutbox.
     * @param {OrderEventOutboxUpsertArgs} args - Arguments to update or create a OrderEventOutbox.
     * @example
     * // Update or create a OrderEventOutbox
     * const orderEventOutbox = await prisma.orderEventOutbox.upsert({
     *   create: {
     *     // ... data to create a OrderEventOutbox
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderEventOutbox we want to update
     *   }
     * })
     */
    upsert<T extends OrderEventOutboxUpsertArgs>(args: Prisma.SelectSubset<T, OrderEventOutboxUpsertArgs<ExtArgs>>): Prisma.Prisma__OrderEventOutboxClient<runtime.Types.Result.GetResult<Prisma.$OrderEventOutboxPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of OrderEventOutboxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderEventOutboxCountArgs} args - Arguments to filter OrderEventOutboxes to count.
     * @example
     * // Count the number of OrderEventOutboxes
     * const count = await prisma.orderEventOutbox.count({
     *   where: {
     *     // ... the filter for the OrderEventOutboxes we want to count
     *   }
     * })
    **/
    count<T extends OrderEventOutboxCountArgs>(args?: Prisma.Subset<T, OrderEventOutboxCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OrderEventOutboxCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a OrderEventOutbox.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderEventOutboxAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderEventOutboxAggregateArgs>(args: Prisma.Subset<T, OrderEventOutboxAggregateArgs>): Prisma.PrismaPromise<GetOrderEventOutboxAggregateType<T>>;
    /**
     * Group by OrderEventOutbox.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderEventOutboxGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends OrderEventOutboxGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: OrderEventOutboxGroupByArgs['orderBy'];
    } : {
        orderBy?: OrderEventOutboxGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, OrderEventOutboxGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderEventOutboxGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the OrderEventOutbox model
     */
    readonly fields: OrderEventOutboxFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for OrderEventOutbox.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__OrderEventOutboxClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    order<T extends Prisma.OrderDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrderDefaultArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the OrderEventOutbox model
 */
export interface OrderEventOutboxFieldRefs {
    readonly id: Prisma.FieldRef<"OrderEventOutbox", 'String'>;
    readonly eventId: Prisma.FieldRef<"OrderEventOutbox", 'String'>;
    readonly orderId: Prisma.FieldRef<"OrderEventOutbox", 'String'>;
    readonly eventType: Prisma.FieldRef<"OrderEventOutbox", 'String'>;
    readonly payloadJson: Prisma.FieldRef<"OrderEventOutbox", 'Json'>;
    readonly publishedAt: Prisma.FieldRef<"OrderEventOutbox", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"OrderEventOutbox", 'DateTime'>;
}
/**
 * OrderEventOutbox findUnique
 */
export type OrderEventOutboxFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderEventOutbox
     */
    select?: Prisma.OrderEventOutboxSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderEventOutbox
     */
    omit?: Prisma.OrderEventOutboxOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrderEventOutboxInclude<ExtArgs> | null;
    /**
     * Filter, which OrderEventOutbox to fetch.
     */
    where: Prisma.OrderEventOutboxWhereUniqueInput;
};
/**
 * OrderEventOutbox findUniqueOrThrow
 */
export type OrderEventOutboxFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderEventOutbox
     */
    select?: Prisma.OrderEventOutboxSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderEventOutbox
     */
    omit?: Prisma.OrderEventOutboxOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrderEventOutboxInclude<ExtArgs> | null;
    /**
     * Filter, which OrderEventOutbox to fetch.
     */
    where: Prisma.OrderEventOutboxWhereUniqueInput;
};
/**
 * OrderEventOutbox findFirst
 */
export type OrderEventOutboxFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderEventOutbox
     */
    select?: Prisma.OrderEventOutboxSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderEventOutbox
     */
    omit?: Prisma.OrderEventOutboxOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrderEventOutboxInclude<ExtArgs> | null;
    /**
     * Filter, which OrderEventOutbox to fetch.
     */
    where?: Prisma.OrderEventOutboxWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OrderEventOutboxes to fetch.
     */
    orderBy?: Prisma.OrderEventOutboxOrderByWithRelationInput | Prisma.OrderEventOutboxOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for OrderEventOutboxes.
     */
    cursor?: Prisma.OrderEventOutboxWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OrderEventOutboxes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OrderEventOutboxes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of OrderEventOutboxes.
     */
    distinct?: Prisma.OrderEventOutboxScalarFieldEnum | Prisma.OrderEventOutboxScalarFieldEnum[];
};
/**
 * OrderEventOutbox findFirstOrThrow
 */
export type OrderEventOutboxFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderEventOutbox
     */
    select?: Prisma.OrderEventOutboxSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderEventOutbox
     */
    omit?: Prisma.OrderEventOutboxOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrderEventOutboxInclude<ExtArgs> | null;
    /**
     * Filter, which OrderEventOutbox to fetch.
     */
    where?: Prisma.OrderEventOutboxWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OrderEventOutboxes to fetch.
     */
    orderBy?: Prisma.OrderEventOutboxOrderByWithRelationInput | Prisma.OrderEventOutboxOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for OrderEventOutboxes.
     */
    cursor?: Prisma.OrderEventOutboxWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OrderEventOutboxes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OrderEventOutboxes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of OrderEventOutboxes.
     */
    distinct?: Prisma.OrderEventOutboxScalarFieldEnum | Prisma.OrderEventOutboxScalarFieldEnum[];
};
/**
 * OrderEventOutbox findMany
 */
export type OrderEventOutboxFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderEventOutbox
     */
    select?: Prisma.OrderEventOutboxSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderEventOutbox
     */
    omit?: Prisma.OrderEventOutboxOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrderEventOutboxInclude<ExtArgs> | null;
    /**
     * Filter, which OrderEventOutboxes to fetch.
     */
    where?: Prisma.OrderEventOutboxWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OrderEventOutboxes to fetch.
     */
    orderBy?: Prisma.OrderEventOutboxOrderByWithRelationInput | Prisma.OrderEventOutboxOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing OrderEventOutboxes.
     */
    cursor?: Prisma.OrderEventOutboxWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OrderEventOutboxes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OrderEventOutboxes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of OrderEventOutboxes.
     */
    distinct?: Prisma.OrderEventOutboxScalarFieldEnum | Prisma.OrderEventOutboxScalarFieldEnum[];
};
/**
 * OrderEventOutbox create
 */
export type OrderEventOutboxCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderEventOutbox
     */
    select?: Prisma.OrderEventOutboxSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderEventOutbox
     */
    omit?: Prisma.OrderEventOutboxOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrderEventOutboxInclude<ExtArgs> | null;
    /**
     * The data needed to create a OrderEventOutbox.
     */
    data: Prisma.XOR<Prisma.OrderEventOutboxCreateInput, Prisma.OrderEventOutboxUncheckedCreateInput>;
};
/**
 * OrderEventOutbox createMany
 */
export type OrderEventOutboxCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderEventOutboxes.
     */
    data: Prisma.OrderEventOutboxCreateManyInput | Prisma.OrderEventOutboxCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * OrderEventOutbox createManyAndReturn
 */
export type OrderEventOutboxCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderEventOutbox
     */
    select?: Prisma.OrderEventOutboxSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderEventOutbox
     */
    omit?: Prisma.OrderEventOutboxOmit<ExtArgs> | null;
    /**
     * The data used to create many OrderEventOutboxes.
     */
    data: Prisma.OrderEventOutboxCreateManyInput | Prisma.OrderEventOutboxCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrderEventOutboxIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * OrderEventOutbox update
 */
export type OrderEventOutboxUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderEventOutbox
     */
    select?: Prisma.OrderEventOutboxSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderEventOutbox
     */
    omit?: Prisma.OrderEventOutboxOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrderEventOutboxInclude<ExtArgs> | null;
    /**
     * The data needed to update a OrderEventOutbox.
     */
    data: Prisma.XOR<Prisma.OrderEventOutboxUpdateInput, Prisma.OrderEventOutboxUncheckedUpdateInput>;
    /**
     * Choose, which OrderEventOutbox to update.
     */
    where: Prisma.OrderEventOutboxWhereUniqueInput;
};
/**
 * OrderEventOutbox updateMany
 */
export type OrderEventOutboxUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderEventOutboxes.
     */
    data: Prisma.XOR<Prisma.OrderEventOutboxUpdateManyMutationInput, Prisma.OrderEventOutboxUncheckedUpdateManyInput>;
    /**
     * Filter which OrderEventOutboxes to update
     */
    where?: Prisma.OrderEventOutboxWhereInput;
    /**
     * Limit how many OrderEventOutboxes to update.
     */
    limit?: number;
};
/**
 * OrderEventOutbox updateManyAndReturn
 */
export type OrderEventOutboxUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderEventOutbox
     */
    select?: Prisma.OrderEventOutboxSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderEventOutbox
     */
    omit?: Prisma.OrderEventOutboxOmit<ExtArgs> | null;
    /**
     * The data used to update OrderEventOutboxes.
     */
    data: Prisma.XOR<Prisma.OrderEventOutboxUpdateManyMutationInput, Prisma.OrderEventOutboxUncheckedUpdateManyInput>;
    /**
     * Filter which OrderEventOutboxes to update
     */
    where?: Prisma.OrderEventOutboxWhereInput;
    /**
     * Limit how many OrderEventOutboxes to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrderEventOutboxIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * OrderEventOutbox upsert
 */
export type OrderEventOutboxUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderEventOutbox
     */
    select?: Prisma.OrderEventOutboxSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderEventOutbox
     */
    omit?: Prisma.OrderEventOutboxOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrderEventOutboxInclude<ExtArgs> | null;
    /**
     * The filter to search for the OrderEventOutbox to update in case it exists.
     */
    where: Prisma.OrderEventOutboxWhereUniqueInput;
    /**
     * In case the OrderEventOutbox found by the `where` argument doesn't exist, create a new OrderEventOutbox with this data.
     */
    create: Prisma.XOR<Prisma.OrderEventOutboxCreateInput, Prisma.OrderEventOutboxUncheckedCreateInput>;
    /**
     * In case the OrderEventOutbox was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.OrderEventOutboxUpdateInput, Prisma.OrderEventOutboxUncheckedUpdateInput>;
};
/**
 * OrderEventOutbox delete
 */
export type OrderEventOutboxDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderEventOutbox
     */
    select?: Prisma.OrderEventOutboxSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderEventOutbox
     */
    omit?: Prisma.OrderEventOutboxOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrderEventOutboxInclude<ExtArgs> | null;
    /**
     * Filter which OrderEventOutbox to delete.
     */
    where: Prisma.OrderEventOutboxWhereUniqueInput;
};
/**
 * OrderEventOutbox deleteMany
 */
export type OrderEventOutboxDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which OrderEventOutboxes to delete
     */
    where?: Prisma.OrderEventOutboxWhereInput;
    /**
     * Limit how many OrderEventOutboxes to delete.
     */
    limit?: number;
};
/**
 * OrderEventOutbox without action
 */
export type OrderEventOutboxDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderEventOutbox
     */
    select?: Prisma.OrderEventOutboxSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderEventOutbox
     */
    omit?: Prisma.OrderEventOutboxOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrderEventOutboxInclude<ExtArgs> | null;
};
//# sourceMappingURL=OrderEventOutbox.d.ts.map