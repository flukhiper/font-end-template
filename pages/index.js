import Link from 'next/link'

import Main from '../src/sections/Main'

const Home = () => (
	<div>
		<Main />
		<Link href={{pathname:'/aboutus'}}>
			<a>go to About Us page</a>
		</Link>
	</div>
)

export default Home
