import {
  SwipeableList,
  SwipeableListItem
} from '@sandstreamdev/react-swipeable-list';
import '@sandstreamdev/react-swipeable-list/dist/styles.css';

import { dateFormatter } from '../helpers';

import EconomyIcon from '../img/economy-icon.svg';
import FoodIcon from '../img/food-icon.svg';
import HealthIcon from '../img/Health-icon.svg';
import HouseIcon from '../img/house-icon.svg';
import LoungeIcon from '../img/lounge-icon.svg';
import MiscellaneousIcon from '../img/miscellaneous-icon.svg';
import SubscriptionsIcon from '../img/subscriptions-icon.svg';

const iconsBook = {
  economy: EconomyIcon,
  food: FoodIcon,
  health: HealthIcon,
  house: HouseIcon,
  lounge: LoungeIcon,
  miscellaneous: MiscellaneousIcon,
  subscriptions: SubscriptionsIcon
};

const Spending = ({ spending }) => {
  const { category, name, qty, date, id } = spending;

  return (
    <SwipeableList>
      <SwipeableListItem
        swipeRight={{
          content: (
            <div className="swipe-action swipe-action__leading">Editar</div>
          ),
          action: () => console.log('editar')
        }}
        swipeLeft={{
          content: (
            <div className="swipe-action swipe-action__trailing">Deletar</div>
          ),
          action: () => console.log('deletar')
        }}
      >
        <div className="spending shadow">
          <div className="spending-content">
            <img draggable="false" src={iconsBook[spending.category]} alt="Ícone de despesa" />
            <div className="spending-description">
              <p className="category">{category}</p>
              <p className="spending-name">{name}</p>
              <p className="spending-date">
                Adicionado em: <span>{dateFormatter(date)}</span>
              </p>
            </div>
          </div>
          <p className="spending-qty">${qty}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default Spending;
