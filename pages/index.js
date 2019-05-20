import Link from 'next/link'

import Layout from '../src/components/Layout'
import Main from '../src/sections/Main'

const Home = () => (
	<Layout>
		<Main />
		<Link href={{pathname:'/aboutus'}}>
			<a>go to About Us page</a>
		</Link>
	</Layout>
)

export default Home
