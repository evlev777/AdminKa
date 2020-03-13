import React from 'react'
import {Switch,Route, Redirect} from 'react-router-dom'
import {NotesPage} from './pages/Notes.page'
import {CreatePage} from './pages/Create.page'
import {DetailPage} from './pages/Detail.page'
import { AuthPage } from './pages/Auth.page'

export const useRoutes = isAuthenticated => {
    if(isAuthenticated){
        return(
            <Switch>
                <Route path = '/Notes' exact>
                    <NotesPage/>
                </Route>
                <Route path = '/Create' exact>
                    <CreatePage/>
                </Route>
                <Route path = '/Detail'>
                    <DetailPage/>
                </Route>
                <Redirect to='/Create'/>
            </Switch>
        )
    }

    return(
        <Switch>
            <Route path='/' exact>
                <AuthPage/>
            </Route>
            <Redirect to='/'/>
        </Switch>
    )
}