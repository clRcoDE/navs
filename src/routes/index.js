
import React from 'react'
import {View , TouchableHighlight , Text} from 'react-native'

import about from '../about'
import dashboard from '../dashboard'
import Login from '../Login'
import setting from '../setting'
import transaction from '../transaction'
import charge from '../charge'
import  forget from '../forget'
import forgetstep1 from '../forgetstep1'
import forgetstep2 from '../forgetstep2'
import signin from '../signin'
import transfer from '../transfer'
import CustomeDrawer from '../CustomeDrawer'
import {createAppContainer , createBottomTabNavigator , createStackNavigator , createSwitchNavigator, createDrawerNavigator} from 'react-navigation'
 


const BottomTab = createBottomTabNavigator(
    {
        dashboard,
        transaction:{
            screen:transaction,

          
        },
        transfer
    },
    {
        
        
    }
)
const TempStack= createStackNavigator(
    {
       BottomTab,
       setting:{
           screen:setting,
        backBehavior: 'initialRoute',
       },
       about:{
           screen:about,
           navigationOptions:({navigation})=>{
               return {
              
               headerLeft:<TouchableHighlight onPress={()=>navigation.popToTop()} ><Text>back</Text></TouchableHighlight>
            
               }
           }
       }
       
    },
    {
        
        initialRouteName: 'BottomTab',
        navigationOptions: ({ navigation }) => {
            return {
             drawerLockMode: navigation.state.routes[0].index === 0 ? 'unlocked' : 'locked-closed'
 
         }

        }
    }
)

const DrawerOne = createDrawerNavigator(
    {
        TempStack,
        BottomTab,
       
        
    },
    {
    contentComponent:CustomeDrawer,
   
    }
)

const StepSwitch = createSwitchNavigator(
    {
        forgetstep1,
        forgetstep2
    }
)
const HomeStack = createSwitchNavigator(
    {
        DrawerOne
    }
)

const LoginStack = createStackNavigator(
    {
        Login,
        signin,
        forget
    }
)
const RootStack = createSwitchNavigator(
    {
        LoginStack,
        HomeStack,
        StepSwitch
    }
)
export const AppContainer = createAppContainer(RootStack)