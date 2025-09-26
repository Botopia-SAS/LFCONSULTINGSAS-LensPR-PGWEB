import createNextIntPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntPlugin('./i18n.ts')

import type { NextConfig } from "next";

const nextConfig: NextConfig = {

};

export default withNextIntl(nextConfig);