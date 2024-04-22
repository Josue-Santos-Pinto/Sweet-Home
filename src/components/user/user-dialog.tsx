"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Chrome, Facebook, Instagram } from 'lucide-react'
import { Separator } from "@/components/ui/separator"

//Form Imports

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { Input } from "@/components/ui/input"

type Props = {
    title: string
}

const formSchema = z.object({
    email: z.string().email().min(6,'E-mail Inválido'),
    password: z.string().min(6,'A senha precisa ter no minimo 6 caracteres')
  })

 

export function UserDialog({title}: Props) {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema)
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values)
    }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link">{title}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="flex items-center w-full">
          <DialogTitle className="text-center">Entrar ou Cadastrar-se</DialogTitle>
        </DialogHeader>
        <Separator />
        <div className="flex flex-col gap-4 py-4">
          <div className="flex flex-1 flex-col gap-4">
            <Button variant='ghost' className="flex flex-row justify-around w-5/6 mx-auto p-4 rounded-xl border border-black">
                <Instagram />
                <p>Continuar com o Instagram</p>
            </Button>

            <Button variant='ghost' className="flex flex-row justify-around w-5/6 mx-auto p-4 rounded-xl border border-black">
                <Facebook />
                <p>Continuar com o Facebook</p>
            </Button>

            <Button variant='ghost' className="flex flex-row justify-around w-5/6 mx-auto p-4 rounded-xl border border-black">
                <Chrome />
                <p>Continuar com o Google</p>
            </Button>
          </div>

          <div className="w-full flex flex-row items-center">
            <div className="flex flex-1 border"/>
            <div className="mx-2 text-xs">ou</div>
            <div className="flex flex-1 border"/>
          </div>

          <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input autoFocus placeholder="Qual o seu email?" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Senha:</FormLabel>
                                <FormControl>
                                    <Input placeholder="Qual a sua senha?" type="password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Continuar</Button>
                </form>
            </Form>

        </div>
      </DialogContent>
    </Dialog>
  )
}
