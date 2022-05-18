import Layout from '../../../components/Layout';
import Link from 'next/link';
import BlogRead from '../../../components/crud/BlogRead';

const Blog = () => {
    const username = "Siva";
    return (
        <Layout>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 pt-5 pb-5">
                            <h2>Manage your Works</h2>
                        </div>
                        <div className="col-md-12">
                            <BlogRead username={username} />
                        </div>
                    </div>
                </div>
        </Layout>
    );
};

export default Blog;
