<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navigation Bar -->
    <nav class="bg-white shadow-lg sticky top-0 z-50">
      <div class="container mx-auto px-4 py-3 flex justify-between items-center">
        <div class="flex items-center space-x-4">
          <router-link to="/" class="flex items-center">
            <img src="/src/components/img/bookmyshow-logo-vector.png" alt="BookMyShow Logo" class="h-16 w-auto">
          </router-link>
          <div class="hidden lg:flex space-x-6">
            <a href="#" class="text-gray-700 hover:text-red-600 font-medium flex items-center">Movies</a>
            <a href="#" class="text-red-600 font-medium flex items-center">Sports</a>
            <a href="#" class="text-gray-700 hover:text-red-600 font-medium flex items-center">Events</a>
          </div>
        </div>
        <div class="flex items-center space-x-4">
          <button class="hidden md:flex items-center text-gray-700 hover:text-red-600">Search</button>
          <button class="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors flex items-center">Sign In</button>
          <button class="lg:hidden text-gray-700">Menu</button>
        </div>
      </div>
    </nav>

    <!-- Hero Banner -->
    <div class="relative bg-gray-900 h-64 md:h-80 lg:h-96 overflow-hidden">
      <img src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" 
           alt="IPL 2025 Banner" 
           class="w-full h-full object-cover opacity-70">
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="text-center px-4">
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">INDIAN PREMIER LEAGUE 2025</h1>
          <p class="text-xl text-white mb-6">The Biggest Cricket Extravaganza Returns</p>
          <button class="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105">
            Book Tickets Now
          </button>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <main class="container mx-auto px-4 py-8">
      <!-- Event Info -->
      <div class="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
        <div class="p-6 md:p-8">
          <div class="flex flex-col md:flex-row md:items-center md:justify-between">
            <div class="mb-4 md:mb-0">
              <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-2">IPL 2025 Season</h2>
              <div class="flex flex-wrap items-center text-gray-600 mb-4">
                <span class="flex items-center mr-4">Sat 22 March 2025 Onwards</span>
                <span class="flex items-center">Multiple Venues</span>
              </div>
            </div>
            <div class="flex space-x-3">
              <button class="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center">Book Now</button>
              <button class="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors flex items-center">Notify Me</button>
            </div>
          </div>
          <p class="text-gray-700 mt-4">Book tickets for upcoming matches through the match list below. Experience the thrill of live cricket with your favorite teams!</p>
        </div>
      </div>

      <!-- Upcoming Matches Section -->
      <section class="mb-12">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-800">Upcoming Matches</h2>
          <div class="flex space-x-2">
            <button class="px-3 py-1 text-sm bg-red-600 text-white rounded-full">All</button>
            <button class="px-3 py-1 text-sm bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300">Today</button>
            <button class="px-3 py-1 text-sm bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300">This Week</button>
          </div>
        </div>
        
        <!-- Match Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="match in matches" :key="match.id" class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div class="p-5 border-b border-gray-200">
              <div class="flex justify-between items-center mb-3">
                <span class="text-xs font-semibold px-2 py-1 bg-gray-100 text-gray-600 rounded-full">{{ match.matchNo }}</span>
                <span class="text-xs text-gray-500 flex items-center">{{ match.time }}</span>
              </div>
              
              <div class="flex justify-between items-center mb-4">
                <div class="flex items-center">
                  <img :src="match.team1Logo" :alt="match.team1" class="w-10 h-10 object-contain mr-3">
                  <span class="font-medium">{{ match.team1 }}</span>
                </div>
                <span class="text-gray-500 font-bold mx-2">VS</span>
                <div class="flex items-center">
                  <span class="font-medium">{{ match.team2 }}</span>
                  <img :src="match.team2Logo" :alt="match.team2" class="w-10 h-10 object-contain ml-3">
                </div>
              </div>
              
              <div class="flex items-center text-sm text-gray-600">{{ match.venue }}</div>
            </div>
            <div class="p-4 bg-gray-50 flex justify-between items-center">
              <span class="text-sm font-medium text-gray-700">{{ match.date }}</span>
              <button 
                @click="openBookingModal(match)"
                class="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm font-medium">
                Book Tickets
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Teams Section -->
      <section class="mb-12">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6">IPL 2025 Teams</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          <div v-for="team in teams" :key="team.id" class="bg-white rounded-lg shadow-md p-4 flex flex-col items-center hover:shadow-lg transition-shadow">
            <img :src="team.logo" :alt="team.name" class="w-16 h-16 object-contain mb-3">
            <h3 class="font-medium text-center">{{ team.name }}</h3>
          </div>
        </div>
      </section>

      <!-- Venues Section -->
      <section class="mb-12">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Stadiums & Venues</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="venue in venues" :key="venue.id" class="bg-white rounded-xl shadow-md overflow-hidden">
            <img :src="venue.image" :alt="venue.name" class="w-full h-48 object-cover">
            <div class="p-4">
              <h3 class="font-bold text-lg mb-2">{{ venue.name }}</h3>
              <p class="text-gray-600 text-sm mb-3">{{ venue.location }}</p>
              <p class="text-gray-700 text-sm">{{ venue.capacity }}</p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Booking Modal -->
    <div v-if="showBookingModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div class="p-6">
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-2xl font-bold text-gray-800">Book Tickets for {{ selectedMatch.team1 }} vs {{ selectedMatch.team2 }}</h3>
            <button @click="closeBookingModal" class="text-gray-500 hover:text-gray-700">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          
          <div class="mb-6 p-4 bg-gray-50 rounded-lg">
            <div class="flex justify-between items-center mb-2">
              <div>
                <p class="font-medium">{{ selectedMatch.team1 }} vs {{ selectedMatch.team2 }}</p>
                <p class="text-sm text-gray-600">{{ selectedMatch.matchNo }}</p>
              </div>
              <div class="text-right">
                <p class="font-medium">{{ selectedMatch.date }}</p>
                <p class="text-sm text-gray-600">{{ selectedMatch.time }}</p>
              </div>
            </div>
            <div class="flex items-center text-sm text-gray-600">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              {{ selectedMatch.venue }}
            </div>
          </div>
          
          <div class="mb-6">
            <h4 class="font-bold text-lg mb-3">Select Ticket Category</h4>
            <div class="space-y-3">
              <div v-for="(category, index) in ticketCategories" :key="index" 
                   class="border rounded-lg p-4 hover:border-red-500 transition-colors"
                   :class="{'border-red-500 bg-red-50': selectedCategory === index}"
                   @click="selectedCategory = index">
                <div class="flex justify-between items-center">
                  <div>
                    <p class="font-medium">{{ category.name }}</p>
                    <p class="text-sm text-gray-600">{{ category.description }}</p>
                  </div>
                  <div class="text-right">
                    <p class="font-bold">₹{{ category.price }}</p>
                    <p class="text-xs text-gray-500">per ticket</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="mb-6">
            <h4 class="font-bold text-lg mb-3">Select Number of Tickets</h4>
            <div class="flex items-center">
              <button @click="decrementTickets" class="bg-gray-200 text-gray-700 px-3 py-1 rounded-l-lg hover:bg-gray-300">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
                </svg>
              </button>
              <div class="bg-gray-100 px-4 py-2 text-center w-16">{{ numberOfTickets }}</div>
              <button @click="incrementTickets" class="bg-gray-200 text-gray-700 px-3 py-1 rounded-r-lg hover:bg-gray-300">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
              </button>
            </div>
          </div>
          
          <div class="mb-6 p-4 bg-gray-50 rounded-lg">
            <div class="flex justify-between mb-2">
              <span class="text-gray-600">Tickets ({{ numberOfTickets }} × ₹{{ ticketCategories[selectedCategory].price }})</span>
              <span class="font-medium">₹{{ numberOfTickets * ticketCategories[selectedCategory].price }}</span>
            </div>
            <div class="flex justify-between mb-2">
              <span class="text-gray-600">Convenience Fee</span>
              <span class="font-medium">₹{{ convenienceFee }}</span>
            </div>
            <div class="flex justify-between text-lg font-bold">
              <span>Total Payable</span>
              <span>₹{{ (numberOfTickets * ticketCategories[selectedCategory].price) + convenienceFee }}</span>
            </div>
          </div>
          
          <div class="flex justify-end space-x-3">
            <button @click="closeBookingModal" class="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors">
              Cancel
            </button>
            <button @click="proceedToPayment" class="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors">
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Payment Modal -->
    <div v-if="showPaymentModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-lg shadow-xl max-w-md w-full">
        <div class="p-6">
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-2xl font-bold text-gray-800">Payment</h3>
            <button @click="closePaymentModal" class="text-gray-500 hover:text-gray-700">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          
          <div class="mb-6 p-4 bg-gray-50 rounded-lg">
            <p class="font-medium mb-1">{{ selectedMatch.team1 }} vs {{ selectedMatch.team2 }}</p>
            <p class="text-sm text-gray-600 mb-2">{{ ticketCategories[selectedCategory].name }} × {{ numberOfTickets }}</p>
            <p class="text-sm">{{ selectedMatch.date }} • {{ selectedMatch.time }}</p>
          </div>
          
          <div class="mb-6">
            <h4 class="font-bold text-lg mb-3">Payment Method</h4>
            <div class="space-y-3">
              <div v-for="(method, index) in paymentMethods" :key="index" 
                   class="border rounded-lg p-4 hover:border-red-500 transition-colors"
                   :class="{'border-red-500 bg-red-50': selectedPaymentMethod === index}"
                   @click="selectedPaymentMethod = index">
                <div class="flex items-center">
                  <img :src="method.icon" :alt="method.name" class="w-8 h-8 mr-3">
                  <span class="font-medium">{{ method.name }}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="mb-6 p-4 bg-gray-50 rounded-lg">
            <div class="flex justify-between text-lg font-bold">
              <span>Total Payable</span>
              <span>₹{{ (numberOfTickets * ticketCategories[selectedCategory].price) + convenienceFee }}</span>
            </div>
          </div>
          
          <button @click="processPayment" class="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors font-bold">
            Pay Now
          </button>
        </div>
      </div>
    </div>

    <!-- Success Modal -->
    <div v-if="showSuccessModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-lg shadow-xl max-w-md w-full text-center">
        <div class="p-6">
          <div class="flex justify-center mb-4">
            <svg class="w-16 h-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-gray-800 mb-2">Payment Successful!</h3>
          <p class="text-gray-600 mb-6">Your tickets for {{ selectedMatch.team1 }} vs {{ selectedMatch.team2 }} have been booked successfully.</p>
          
          <div class="mb-6 p-4 bg-gray-50 rounded-lg text-left">
            <p class="font-medium mb-1">Booking Reference: <span class="font-bold">BMS{{ Math.floor(Math.random() * 1000000) }}</span></p>
            <p class="text-sm text-gray-600 mb-2">{{ ticketCategories[selectedCategory].name }} × {{ numberOfTickets }}</p>
            <p class="text-sm">{{ selectedMatch.date }} • {{ selectedMatch.time }}</p>
            <p class="text-sm mt-2">{{ selectedMatch.venue }}</p>
          </div>
          
          <p class="text-sm text-gray-500 mb-6">An e-ticket has been sent to your registered email address.</p>
          
          <button @click="closeSuccessModal" class="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors font-bold">
            Done
          </button>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-8">
          <div class="col-span-2">
            <h3 class="text-white text-xl font-bold mb-4">bookmyshow</h3>
            <p class="text-gray-400 mb-4">India's largest online ticketing platform for movies, sports, events and more.</p>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-400 hover:text-white">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-white">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-white">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4 class="text-white font-semibold mb-4">Movies</h4>
            <ul class="space-y-2">
              <li><a href="#" class="hover:text-white">Movies in Delhi</a></li>
              <li><a href="#" class="hover:text-white">Movies in Mumbai</a></li>
              <li><a href="#" class="hover:text-white">Movies in Bangalore</a></li>
              <li><a href="#" class="hover:text-white">Movies in Hyderabad</a></li>
            </ul>
          </div>
          <div>
            <h4 class="text-white font-semibold mb-4">Sports</h4>
            <ul class="space-y-2">
              <li><a href="#" class="hover:text-white">Cricket</a></li>
              <li><a href="#" class="hover:text-white">Football</a></li>
              <li><a href="#" class="hover:text-white">Tennis</a></li>
              <li><a href="#" class="hover:text-white">Kabaddi</a></li>
            </ul>
          </div>
          <div>
            <h4 class="text-white font-semibold mb-4">Help</h4>
            <ul class="space-y-2">
              <li><a href="#" class="hover:text-white">About Us</a></li>
              <li><a href="#" class="hover:text-white">Contact Us</a></li>
              <li><a href="#" class="hover:text-white">FAQs</a></li>
              <li><a href="#" class="hover:text-white">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>
        <div class="border-t border-gray-800 pt-6 text-center text-sm">
          <p>© 2025 BookMyShow. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'IPLPage',
  data() {
    return {
      matches: [
        {
          id: 1,
          matchNo: 'Match 1',
          date: 'Sat, 22 Mar 2025',
          time: '7:30 PM',
          team1: 'MI',
          team1Logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Mumbai_Indians_Logo.svg/1200px-Mumbai_Indians_Logo.svg.png',
          team2: 'CSK',
          team2Logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Chennai_Super_Kings_Logo.svg/1200px-Chennai_Super_Kings_Logo.svg.png',
          venue: 'Wankhede Stadium, Mumbai'
        },
        {
          id: 2,
          matchNo: 'Match 2',
          date: 'Sun, 23 Mar 2025',
          time: '3:30 PM',
          team1: 'RCB',
          team1Logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Royal_Challengers_Bangalore_2020.svg/1200px-Royal_Challengers_Bangalore_2020.svg.png',
          team2: 'KKR',
          team2Logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Kolkata_Knight_Riders_Logo.svg/1200px-Kolkata_Knight_Riders_Logo.svg.png',
          venue: 'M. Chinnaswamy Stadium, Bengaluru'
        },
        {
          id: 3,
          matchNo: 'Match 3',
          date: 'Mon, 24 Mar 2025',
          time: '7:30 PM',
          team1: 'DC',
          team1Logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Delhi_Capitals_Logo.svg/1200px-Delhi_Capitals_Logo.svg.png',
          team2: 'PBKS',
          team2Logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Punjab_Kings_Logo.svg/1200px-Punjab_Kings_Logo.svg.png',
          venue: 'Arun Jaitley Stadium, Delhi'
        },
        {
          id: 4,
          matchNo: 'Match 4',
          date: 'Tue, 25 Mar 2025',
          time: '7:30 PM',
          team1: 'GT',
          team1Logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/Gujarat_Titans_Logo.svg/1200px-Gujarat_Titans_Logo.svg.png',
          team2: 'LSG',
          team2Logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Lucknow_Super_Giants_Logo.svg/1200px-Lucknow_Super_Giants_Logo.svg.png',
          venue: 'Narendra Modi Stadium, Ahmedabad'
        }
      ],
      teams: [
        { id: 1, name: 'Mumbai Indians', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Mumbai_Indians_Logo.svg/1200px-M umbai_Indians_Logo.svg.png' },
        { id: 2, name: 'Chennai Super Kings', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Chennai_Super_Kings_Logo.svg/1200px-Chennai_Super_Kings_Logo.svg.png' },
        { id: 3, name: 'Royal Challengers', logo: '/src/components/img/RCB-removebg-preview.png' },
        { id: 4, name: 'Kolkata Knight Riders', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Kolkata_Knight_Riders_Logo.svg/1200px-Kolkata_Knight_Riders_Logo.svg.png' },
        { id: 5, name: 'Delhi Capitals', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Delhi_Capitals_Logo.svg/1200px-Delhi_Capitals_Logo.svg.png' },
        { id: 6, name: 'Punjab Kings', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Punjab_Kings_Logo.svg/1200px-Punjab_Kings_Logo.svg.png' },
        { id: 7, name: 'Rajasthan Royals', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/60/Rajasthan_Royals_Logo.svg/1200px-Rajasthan_Royals_Logo.svg.png' },
        { id: 8, name: 'Sunrisers Hyderabad', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/81/Sunrisers_Hyderabad.svg/1200px-Sunrisers_Hyderabad.svg.png' },
        { id: 9, name: 'Gujarat Titans', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/Gujarat_Titans_Logo.svg/1200px-Gujarat_Titans_Logo.svg.png' },
        { id: 10, name: 'Lucknow Super Giants', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Lucknow_Super_Giants_Logo.svg/1200px-Lucknow_Super_Giants_Logo.svg.png' }
      ],
      venues: [
        {
          id: 1,
          name: 'Wankhede Stadium',
          location: 'Mumbai, Maharashtra',
          capacity: 'Capacity: 33,108',
          image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
        },
        {
          id: 2,
          name: 'M. Chinnaswamy Stadium',
          location: 'Bengaluru, Karnataka',
          capacity: 'Capacity: 40,000',
          image: 'https://images.unsplash.com/photo-1593118247619-e2d6f056869e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
        },
        {
          id: 3,
          name: 'Arun Jaitley Stadium',
          location: 'Delhi',
          capacity: 'Capacity: 41,842',
          image: 'https://images.unsplash.com/photo-1600679472829-3044539ce8ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
        },
        {
          id: 4,
          name: 'Narendra Modi Stadium',
          location: 'Ahmedabad, Gujarat',
          capacity: 'Capacity: 132,000',
          image: 'https://images.unsplash.com/photo-1600679472829-3044539ce8ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
        }
      ],
      showBookingModal: false,
      showPaymentModal: false,
      showSuccessModal: false,
      selectedMatch: null,
      selectedCategory: 0,
      numberOfTickets: 1,
      convenienceFee: 50,
      ticketCategories: [
        { name: 'Regular', description: 'Standard seating', price: 500 },
        { name: 'VIP', description: 'Premium seating', price: 1000 },
        { name: 'Family', description: 'Family pack', price: 1500 }
      ],
      paymentMethods: [
        { name: 'Credit Card', icon: 'https://upload.wikimedia.org/wikipedia/ en/thumb/4/4c/Payment_Card_Icon.svg/1200px-Payment_Card_Icon.svg.png' },
        { name: 'Debit Card', icon: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Payment_Card_Icon.svg/1200px-Payment_Card_Icon.svg.png' },
        { name: 'Net Banking', icon: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Payment_Card_Icon.svg/1200px-Payment_Card_Icon.svg.png' },
        { name: 'UPI', icon: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Payment_Card_Icon.svg/1200px-Payment_Card_Icon.svg.png' }
      ],
      selectedPaymentMethod: 0
    }
  },
  methods: {
    openBookingModal(match) {
      this.selectedMatch = match;
      this.showBookingModal = true;
    },
    closeBookingModal() {
      this.showBookingModal = false;
    },
    proceedToPayment() {
      this.showBookingModal = false;
      this.showPaymentModal = true;
    },
    closePaymentModal() {
      this.showPaymentModal = false;
    },
    processPayment() {
      this.showPaymentModal = false;
      this.showSuccessModal = true;
    },
    closeSuccessModal() {
      this.showSuccessModal = false;
      this.resetBooking();
    },
    incrementTickets() {
      this.numberOfTickets++;
    },
    decrementTickets() {
      if (this.numberOfTickets > 1) {
        this.numberOfTickets--;
      }
    },
    resetBooking() {
      this.selectedMatch = null;
      this.selectedCategory = 0;
      this.numberOfTickets = 1;
    }
  }
}
</script>

<style>
/* Custom styles can be added here */
</style>