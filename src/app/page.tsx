export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Updated Upcoming Events section */}
      <section className="w-full max-w-5xl mt-12">
        <h2 className="text-3xl font-bold mb-6 text-white">Upcoming Events</h2>
        <div className="bg-gradient-to-br from-ycs-pink/20 to-ycs-pink/10 backdrop-blur-sm rounded-lg p-6">
          <ul className="space-y-6">
            <li className="border-b border-ycs-pink/30 pb-4">
              <p className="font-semibold text-xl text-ycs-pink">June 15, 2024 - AI in Healthcare Symposium</p>
              <p className="text-white/80">Speakers: Dr. Jane Smith, Prof. John Doe, Dr. Emily Johnson</p>
            </li>
            <li className="border-b border-ycs-pink/30 pb-4">
              <p className="font-semibold text-xl text-ycs-pink">August 22, 2024 - Machine Learning Workshop</p>
              <p className="text-white/80">Speakers: Dr. Michael Brown, Sarah Lee, PhD, Robert Chen</p>
            </li>
            <li>
              <p className="font-semibold text-xl text-ycs-pink">October 5, 2024 - Ethics in AI Conference</p>
              <p className="text-white/80">Speakers: Prof. Lisa Garcia, Dr. David Wilson, Amelia Thompson</p>
            </li>
          </ul>
        </div>
      </section>

      // ... rest of the existing content ...
    </main>
  )
}