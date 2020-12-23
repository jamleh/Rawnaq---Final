import React from "react";
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment
} from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";
import { fetchCart } from "../store/actions/cart";


class CustomLayout extends React.Component {
  componentDidMount() {
    this.props.fetchCart();
  }

  render() {
    const { authenticated, cart, loading } = this.props;
    return (
      <div>
        <Menu inverted style={{ backgroundColor: '#6b5b95', height: '85px' }}>
          <Container >
            <Link to="/">

              <Image src="http://127.0.0.1:8000/media/logo.png" style={{ height: '85px', width: '100px' }}></Image>

            </Link>
            <Link to="/">
              <Menu.Item header style={{ margin: '20px' }}>RAWNAQ</Menu.Item>
            </Link>
            <Link to="/products">
              <Menu.Item header style={{ margin: '20px' }}>Products</Menu.Item>
            </Link>
            {authenticated ? (
              <React.Fragment>
                <Menu.Menu position="right">
                  <Link to="/profile">
                    <Menu.Item style={{ margin: '20px' }}>Profile</Menu.Item>
                  </Link>
                  <Dropdown
                    icon="cart"
                    loading={loading}
                    text={`${cart !== null ? cart.order_items.length : 0}`}
                    pointing
                    className="link item"
                  >
                    <Dropdown.Menu>
                      {cart !== null ? (
                        <React.Fragment>
                          {cart.order_items.map(order_item => {
                            return (
                              <Dropdown.Item key={order_item.id}>
                                {order_item.quantity} x {order_item.item.title}
                              </Dropdown.Item>
                            );
                          })}
                          {cart.order_items.length < 1 ? (
                            <Dropdown.Item>No items in your cart</Dropdown.Item>
                          ) : null}
                          <Dropdown.Divider />

                          <Dropdown.Item
                            icon="arrow right"
                            text="Checkout"
                            onClick={() =>
                              this.props.history.push("/order-summary")
                            }
                          />
                        </React.Fragment>
                      ) : (
                          <Dropdown.Item>No items in your cart</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                  </Dropdown>
                  <Menu.Item header onClick={() => this.props.logout()} style={{ margin: '20px' }}>
                    Logout
                  </Menu.Item>
                </Menu.Menu>
              </React.Fragment>
            ) : (
                <Menu.Menu position="right">
                  <Link to="/login">
                    <Menu.Item header style={{ margin: '20px' }}>Signin</Menu.Item>
                  </Link>
                  <Link to="/signup">
                    <Menu.Item header style={{ margin: '20px' }}>Signup</Menu.Item>
                  </Link>
                </Menu.Menu>
              )}
          </Container>
        </Menu>

        {this.props.children}

        <Segment
          inverted
          vertical
          style={{ margin: "5em 0em 0em", padding: "5em 0em", backgroundColor: '#6b5b95' }}
        >
          <Container textAlign="center">
            <Grid divided inverted stackable>
              <Grid.Column width={5}>
                <Header inverted as="h4" content="About" />
                <p>Rawnaq.com is a  clothes online stores website which allow you to choose  requirement and buy it online</p>
              </Grid.Column>
              <Grid.Column width={5}>
                <Header inverted as="h4" content="Contact Us" />
                <List link inverted>
                  <List.Item >321-654-8977</List.Item>
                  <List.Item >Palestine</List.Item>
                  <List.Item >123 street South</List.Item>
                  {/* <List.Item ></List.Item> */}
                </List>
              </Grid.Column>
              <Grid.Column width={5}>
                <Header inverted as="h4" content="Developers" />
                <List link inverted>
                  <List.Item >Aya</List.Item>
                  <List.Item >Emad</List.Item>
                  <List.Item >Rasha</List.Item>
                  <List.Item >Sufyan</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={8} textAlign={"center"}>
                <Header inverted as="h4" />
                <p>
                  &copy;{new Date().getFullYear()} Rawnaq.com|All right reserved by <a href="/">Rawnaq.</a>|<a href="/"> Terms Of Service</a>|<a href="/"> Privacy</a>
                </p>
              </Grid.Column>
            </Grid>

            {/* <Divider inverted section />
            <Image centered size="mini" src="/logo.png" />
            <List horizontal inverted divided link size="small">
              <List.Item as="a" href="#">
                Site Map
              </List.Item>
              <List.Item as="a" href="#">
                Contact Us
              </List.Item>
              <List.Item as="a" href="#">
                Terms and Conditions
              </List.Item>
              <List.Item as="a" href="#">
                Privacy Policy
              </List.Item> */}
            {/* </List> */}
          </Container>
        </Segment>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.auth.token !== null,
    cart: state.cart.shoppingCart,
    loading: state.cart.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchCart: () => dispatch(fetchCart())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CustomLayout)
);
