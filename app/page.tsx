import ShortUrlForm from "@/components/ui/custom/ShortUrlForm";


export default function HomePage() {

  return (
    <main className="flex flex-col items-center text-center justify-center min-h-screen px-4 py-16 bg-white text-gray-900">
      <div className="max-w-2xl w-full text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Shorten Your URLs Instantly</h1>
        <p className="text-lg text-gray-600">
          Paste your long link below and get a custom, trackable short URL in seconds.
        </p>

        <ShortUrlForm/>

        {/* Optionally add a section for benefits or features */}
        <div className="pt-8 text-sm text-gray-500">
          Fast • Free • Analytics • Custom Links
        </div>
      </div>
    </main>
  )
}
