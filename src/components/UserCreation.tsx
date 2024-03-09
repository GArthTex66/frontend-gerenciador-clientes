import { Dialog,
     DialogClose,
     DialogContent,
     DialogDescription,
     DialogFooter,
     DialogHeader,
     DialogTitle,
     DialogTrigger 
    } from './ui/dialog'

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    } from "@/components/ui/form"

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { RootState } from '../stores/Store'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Dispatch } from '@reduxjs/toolkit'

interface UserFields {
    name: string,
    email: string,
    phone: string
}

const fields : UserFields = { name:'Nome', email:'Email', phone:'Telefone' }

type UserKey = keyof UserFields

const schema = z.object({
    name: z.string().min(1, { message: 'Campo Obrigatório' }),
    email: z.string().email({ message: 'Email Inválido' }),
    phone: z.string().min(10, { message: 'Telefone Inválido' })
  });


function UserCreation() {


    const form = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues: {
            name: '',
            email: '',
            phone: '',
        },
      });

    const dispatch: Dispatch = useDispatch();

    const handleSubmitRoutine = (values:z.infer<typeof schema>) => {

        

       
        // console.log(name, email, phone)
    }

    return (
        <>
            <div className='flex items-center justify-between py-4'> 
                <Dialog>
                    <DialogTrigger asChild>
                        <Button>
                            Adicionar Usuário
                        </Button>
                    </DialogTrigger>
                    
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Novo Usuário</DialogTitle>
                            <DialogDescription>Adicione um nome, e-mail e telefone</DialogDescription>
                        </DialogHeader>

                        <Form {...form}>
                            <form className='space-y-6 ' onSubmit={form.handleSubmit(handleSubmitRoutine)}>
                                {Object.keys(schema.shape).map((key, index) => {
                                    const keygen = `${key}_${index}` as UserKey 
                                    return (
                                        <FormField
                                            key={keygen}
                                            control={form.control}
                                            name={key as UserKey} 
                                            render={({ field }) => (
                                                <FormItem className='grid grid-cols-6 items-center gap-3'>
                                                    <FormLabel htmlFor={key}>{fields[key as UserKey]}</FormLabel>
                                                    <div className='col-span-5'>
                                                        <FormControl>
                                                            <Input id={key as UserKey}  {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </div>
                                                    
                                                </FormItem>
                                            )}
                                        />
                                    )
                                })}
                               
                                <DialogFooter>
                                    <DialogClose asChild>
                                        <Button variant='outline'>Cancelar</Button>
                                    </DialogClose>
                                    <Button type="submit" variant='default'>Adicionar</Button>
                                </DialogFooter>
                            </form>
                        </Form>

                        {/* <form className='space-y-6 ' onSubmit={handleSubmit(handleSubmitRoutine)}>
                            <div className='grid grid-cols-6 items-center gap-3'>
                                <Label>Nome</Label>
                                <Input id='name' className='col-span-5'
                                onChange={name=> setName(name.target.value)} />
                                {errors.name?.message && <p>{errors.name?.message}</p>}
                            </div>
                            <div className='grid grid-cols-6 items-center gap-3'>
                                <Label>Email</Label>
                                <Input id='email' className='col-span-5'
                                onChange={email=> setEmail(email.target.value)} />
                            </div>
                            <div className='grid grid-cols-6 items-center gap-3'>
                                <Label>Telefone</Label>
                                <Input id='phone' className='col-span-5'
                                onChange={phone=> setPhone(phone.target.value)}/>
                            </div>
                            <DialogFooter>
                                <DialogClose asChild>
                                    <Button variant='outline'>Cancelar</Button>
                                </DialogClose>
                                <Button type="submit" variant='default'>Adicionar</Button>
                            </DialogFooter>
                        </form> */}
                    </DialogContent>
                </Dialog>
            </div>
        </>
    )
}

export default UserCreation