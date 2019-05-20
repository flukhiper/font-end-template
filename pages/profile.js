import Link from 'next/link'

import Layout from '../src/components/Layout'

class Profile extends React.Component {
  static async getInitialProps({req}) {
    return {...req.params,...req.query};
  }
 
  render(){
    console.log(this.props)
    return (
      <Layout>
        <Link href={{pathname:'/'}}>
          <a>go back to Home page</a>
        </Link>
      </Layout>
    )
  }
}

export default Profile;
