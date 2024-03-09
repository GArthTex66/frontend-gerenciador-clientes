import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Search } from 'lucide-react'

function UserTable() {

    return (
        // <div>
        //     <form className='flex items-center gap-2 pb-4'>
        //     <Input name='id' placeholder='ID' />
        //     <Input name='name' placeholder='Nome' />
        //     <Input name='email' placeholder='Email' />
        //     <Input name='phone' placeholder='Telefone' />
        //     <Button variant="ghost">
        //         Pesquisar
        //         <Search className='w-5 h-5 pl-1'/>
        //     </Button>
        // </form>
          
        // <div className='border rounded-lg p-2'>

        //     <h2 className='font-bold'> Lista de Usuários </h2>
          
        //     <Table>
        //         <TableHeader>
        //             <TableHead>ID</TableHead>
        //             <TableHead>Nome</TableHead>
        //             <TableHead>Email</TableHead>
        //             <TableHead>Telefone</TableHead>
        //         </TableHeader>
        //         <TableBody>
        //             {users.map((user,index) => (
        //                 <TableRow key = {index}>
        //                     <TableCell>{user.id}</TableCell>
        //                     <TableCell>{user.name}</TableCell>
        //                     <TableCell>{user.email}</TableCell>
        //                     <TableCell>{user.phone}</TableCell>
        //                 </TableRow>
        //             ))}
        //         </TableBody>
        //     </Table>
        // </div>
        // </div>
    );
}

export default UserTable;