import {createBottomTabNavigator} from 'react-navigation-tabs';
import DonateScreen from '../screens/DonateScreen'
import RequestScreen from '../screens/RequestScreen'

const TabNavigator = createBottomTabNavigator(
    {
        Donate:{screen:DonateScreen},
        Request:{screen:RequestScreen}

    }
)

export default TabNavigator;