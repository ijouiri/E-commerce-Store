import React from "react";

import "./items-container.styles.scss"
import Item from '../item/item.component'

class ItemsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      items: [
        {
          title: 'hats',
          imageUrl: 'https://images.unsplash.com/photo-1534215754734-18e55d13e346?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=404&q=80',
          id: 1
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5
        }
      ]
    }
  }

  render() {
    return (
      <div className='items-container'>
        {
          this.state.items.map(({ title, imageUrl, id, size }) => (
            <Item key={id} title={title} imgUrl={imageUrl} size={size} />

          ))
        }
      </div>

    )


  }

}


export default ItemsContainer;
