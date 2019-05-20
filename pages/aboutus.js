import Link from 'next/link'

import Layout from '../src/components/Layout'

const AboutUs = () => (
  <Layout>
    AboutUs Page.
    <Link href={{pathname:'/'}}>
			<a>go back to Home page</a>
		</Link>
  </Layout>
);

export default AboutUs;
