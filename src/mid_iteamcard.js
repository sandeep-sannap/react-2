


function Iteamcard(props){
    return<>
        <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <a href="#"><img className="card-img-top" src={props.card.img} alt=""/></a>
              <div className="card-body">
                <h4 className="card-title">
                  <a href="#">{props.card.product_name}</a>
                </h4>
                <h5>{props.card.currancy}{props.card.product_price}</h5>
                <p className="card-text">{props.card.product_description}</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">
                    
                    &#9733; &#9733; &#9733; &#9733; &#9734;
                </small>
                <button className="btn btn-light" style={{float:"right"}} onClick={()=>{
                  props.handleCartButton(props.card)
                }}>Add to cart</button>
              </div>
            </div>
        </div>
    </>;
}
export default Iteamcard;