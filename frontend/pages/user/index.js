import Layout from '../../components/Layout';
import Link from 'next/link';

const UserIndex = () => {
    const styleObj = {
        maxWidth: "20em",
        margin: "1em",
        font: "1.5rem/1.4 Georgia, serif",
        }

    return (
        <Layout>
                <div className="container">
                    <div className="row ">
                        <div className="col-md-4 d-flex align-items-center">
                            <ul className="list-group">
                                <li className="list-group-item list-group-item-action">
                                    <Link href="/user/crud/blog">
                                        <a>Add your Work</a>
                                    </Link>
                                </li>
                                <li className="list-group-item list-group-item-action">
                                    <Link href="/user/crud/blogs">
                                        <a>Update/Delete Your Works</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-8">
                                <h2 style={{color:"blueviolet"}}>So Whats in your dashboard?</h2>
                                <h6 style={{lineHeight:2.0}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc metus arcu, imperdiet vitae elit eu, sollicitudin volutpat libero. Phasellus non quam rutrum, auctor urna quis, cursus risus. Etiam cursus eros mauris, et tempor nibh facilisis id. Pellentesque vestibulum ex sagittis luctus imperdiet. Pellentesque dolor nulla, lobortis eget ornare non, viverra sed nulla. Curabitur ut est dolor. Maecenas vitae bibendum ex, non posuere dolor. Integer eu sagittis nibh. Morbi nibh ex, rhoncus non ligula eget, porta fermentum quam.</h6>
                        </div>
                    </div>
                    <br /><br /><br />

                    <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-10">
                                <q style={styleObj}>Hard work beats talent when talent doesn't work hard</q>
                                <h6 style={{fontStyle: 'italic',textAlign:'right'}}>--Tim Notke, coach</h6>
                            </div>
                    </div>
                </div>
        </Layout>
    );
};

export default UserIndex;
