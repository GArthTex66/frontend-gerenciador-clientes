import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table'

import  UserCreation  from './UserCreation'
import SearchInputs from './SearchInputs'
import { useGetUsersQuery } from '@/services/usersApi'
import { User, UserKey } from '@/models/user.model'
import { useState } from 'react'


function Home() {
    const { data, error, isLoading, isSuccess } = useGetUsersQuery()
    const [userFilter, setUserFilter] = useState<User>()
    console.log(data)

    const itensDisplay = (rawItens:User[], filters: User) => {
        console.log('rawItens', rawItens)
        const itens:User[] = rawItens.map((item) => {return {id: item.id, name: `${item.first_name} ${item.last_name}`, email: item.email}})
        console.log('itens', itens)
        return !filters ? itens : itens.filter((user) => {
            for (const key in filters) {
                if (filters[key as UserKey] !== '' && filters[key as UserKey] !== undefined &&
                 String(user[key as UserKey])?.includes(filters[key as UserKey] as string)) {
                    return true
                }
            }
            return false
          })
    }


  return (
    <div className='p-6 max-w-4xl mx-auto'>
        
        <UserCreation />
        <SearchInputs onSelectFilter={(value) => {setUserFilter(value)}}/>

        {isLoading && <p>Carregando...</p>}

        {error && <p>Erro ao carregar os usuários</p>}

        {isSuccess && (<div className='border rounded-lg p-2'>
            <h2 className='font-bold'> Lista de Usuários </h2>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Nome</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Telefone</TableHead>
                    </TableRow>                  
                </TableHeader>
                <TableBody>
                    {itensDisplay(data.data, userFilter as User).map((user,index) => (
                        <TableRow key = {index}>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>00000-00000</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            </div>
        )}
          
        
        
        

    </div>
  )
}

export default Home