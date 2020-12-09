class ComponentList extends Component{

    render() {
        var {product} = this.props;
        var img_product = `${API_URL}/${product.iconURL}`;
        return (
            <div className="col-lg-2 col-md-2 col-6">
                <Link to={product._id} className='product-card'>
                <Card>
                <Card.Img variant="top" src={img_product} />
                <p className='fis'>{product.name}</p>
                </Card>
                </Link>
            </div>
        );
    }
}

