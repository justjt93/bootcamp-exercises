import React from "react";
import Product from "./Product.jsx";

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          id: 1,
          img_url:
            "https://classes.codingbootcamp.cz/assets/classes/workouts/aperture/propulsion-gel.jpg",
          name: "Propulsion gel"
        },
        {
          id: 2,
          img_url:
            "https://classes.codingbootcamp.cz/assets/classes/workouts/aperture/weight-cube.jpg",
          name: "Weight cube"
        },
        {
          id: 3,
          img_url:
            "https://classes.codingbootcamp.cz/assets/classes/workouts/aperture/friendly-cube.jpg",
          name: "A friend"
        },
        {
          id: 4,
          img_url:
            "https://classes.codingbootcamp.cz/assets/classes/workouts/aperture/portal-gun.jpg",
          name: "Portal gun"
        },
        {
          id: 5,
          img_url:
            "https://classes.codingbootcamp.cz/assets/classes/workouts/aperture/defense-robot.jpg",
          name: "Home-defense robot"
        },
        {
          id: 6,
          img_url:
            "https://classes.codingbootcamp.cz/assets/classes/workouts/aperture/cake.jpg",
          name: "Cake (not a lie)"
        }
      ]
    };
  }

  render() {
    console.log(this.props.searchInput);

    return (
      <div className='product-list'>
        {this.state.data.map(product => {
          if (
            product.name
              .toLowerCase()
              .startsWith(this.props.searchInput.toLowerCase())
          ) {
            <h1>hi</h1>;
            return <Product product={product} />;
          } 
        })}
      </div>
    );
  }
}
