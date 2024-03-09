import { Input } from './ui/input'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { User } from '@/models/user.model';

function SearchInputs(props: {onSelectFilter: (value: User | undefined) => void}){

    const [searchValue, setSearchValue] = useState<User>();

    const onSearch = (e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        props.onSelectFilter(searchValue);          
    }

    const getFilterValues = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e)

        const fieldFilter = e.target.name
        const value = e.target.value
        const newFilter: User = {...searchValue, [fieldFilter]: value}

        console.log(newFilter)

        setSearchValue(newFilter)
    } 
  
    return (
        <form onSubmit={onSearch} className='flex items-center gap-2 pb-4'>
          <Input name='id' placeholder='ID'
          onChange={(e) => getFilterValues(e)} />

          <Input name='name' placeholder='Nome' 
          onChange={(e) => getFilterValues(e)} />

          <Input name='email' placeholder='Email' 
          onChange={(e) => getFilterValues(e)} />

          {/* <Input name='phone' placeholder='Telefone' 
          onChange={(e) => getFilterValues(e)} /> */}
          <Button variant="ghost" >
              Pesquisar
            <Search className='w-5 h-5 pl-1'/>
          </Button>
        </form>
    )
  
}

export default SearchInputs