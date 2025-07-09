'use client'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"



const ShortUrlForm = () => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
  return (
     <form className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-2" onSubmit={handleSubmit}>
          <Label htmlFor="url" className="sr-only">URL</Label>
          <Input
            id="url"
            type="url"
            placeholder="https://example.com/some/very/long/link"
            className="w-full sm:w-[400px]"
            required
          />
          <Button type="submit">Shorten URL</Button>
        </form>
  )
}

export default ShortUrlForm