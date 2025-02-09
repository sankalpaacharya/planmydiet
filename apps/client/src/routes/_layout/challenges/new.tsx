import { createFileRoute } from '@tanstack/react-router'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'
import { Sword } from 'lucide-react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'
import { useEffect, useState } from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { CalendarIcon } from 'lucide-react'

export const Route = createFileRoute('/_layout/challenges/new')({
  component: RouteComponent,
})

function RouteComponent() {
  useEffect(() => {}, [])
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="flex space-x-2">
            <Sword />
            <span>Creating new Challenge</span>
          </CardTitle>
          <CardDescription>
            Please fill the respective input fields
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Title</Label>
            <Input type="title" id="email" placeholder="Title" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="text">Description</Label>
            <Input type="text" id="email" placeholder="Description" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="text">Select Your Plan</Label>
            <SelectDietPlan />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Ends in</Label>
            <DatePicker />
          </div>
          <Button>Create</Button>
        </CardContent>
      </Card>
    </div>
  )
}

const SelectDietPlan = () => {
  const [dietId, setDietId] = useState<string>()
  console.log(dietId)
  const DietPlan = [
    {
      id: '1',
      title: 'My january plan 2023',
    },
    {
      id: '2',
      title: 'I have to lose weight else i will be super fat',
    },
  ]
  return (
    <Select onValueChange={(id) => setDietId(id)}>
      <SelectTrigger>
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Diet Plan</SelectLabel>
          {DietPlan.map((diet) => (
            <SelectItem value={diet.id}>{diet.title}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

const DatePicker = () => {
  const [date, setDate] = useState<Date>()
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'secondary'}
          className={cn(
            'w-[280px] justify-start text-left font-normal',
            !date && 'text-muted-foreground',
          )}
        >
          <CalendarIcon size={20} />
          {date ? format(date, 'PPP') : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
