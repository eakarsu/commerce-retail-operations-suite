# Commerce Retail Operations Suite

Wave:
- Portfolio next-20 completion batch

Source candidates represented:
- `shopify`
- `ebay`
- `AiECommerceAgent`
- `AIPricingOptimizer`

This suite is a runnable merged app with one login, one dashboard, one feature-first sidebar, PostgreSQL-backed records/documents/notifications/audit, role behavior, and smoke coverage.

## Local Run

```bash
cd /Users/erolakarsu/projects/merged/commerce-retail-operations-suite
./start.sh
```

Local URL:
- `http://127.0.0.1:4000`

Seeded users:
- `admin@commerce-retail.local / admin123`
- `manager@commerce-retail.local / manager123`
- `analyst@commerce-retail.local / analyst123`

## Validation

```bash
cd /Users/erolakarsu/projects/merged/commerce-retail-operations-suite/frontend
npm run typecheck
SMOKE_BASE_URL=http://127.0.0.1:4000 npm run smoke
```
