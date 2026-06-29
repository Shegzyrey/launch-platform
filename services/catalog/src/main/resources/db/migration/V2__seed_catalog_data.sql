INSERT INTO products (
    id,
    sku,
    name,
    status,
    price_minor,
    currency,
    created_at,
    updated_at
)
VALUES
(
    gen_random_uuid(),
    'SKU-001',
    'Sample Product One',
    'active',
    2500,
    'GBP',
    NOW(),
    NOW()
),
(
    gen_random_uuid(),
    'SKU-002',
    'Inactive Product',
    'inactive',
    1500,
    'GBP',
    NOW(),
    NOW()
)
ON CONFLICT (sku) DO NOTHING;

INSERT INTO inventory (
    id,
    sku,
    available_quantity,
    reserved_quantity,
    updated_at
)
VALUES
(
    gen_random_uuid(),
    'SKU-001',
    100,
    0,
    NOW()
),
(
    gen_random_uuid(),
    'SKU-002',
    50,
    0,
    NOW()
)
ON CONFLICT (sku) DO NOTHING;