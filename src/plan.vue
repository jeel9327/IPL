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
        <div class="mb-12">
        <h2 class="text-2xl font-semibold mb-6 text-center bg-gray-100 py-2 rounded-lg">League Matches</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(match, index) in leagueMatches" :key="'league-'+index" class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div class="p-5 border-b border-gray-200">
              <div class="flex justify-between items-center mb-3">
                <span class="text-xs font-semibold px-2 py-1 bg-gray-100 text-gray-600 rounded-full">Match {{ index + 1 }}</span>
                <span class="text-xs text-gray-500 flex items-center">{{ match.time }}</span>
              </div>
              
              <div class="flex justify-between items-center mb-4">
                <div class="flex items-center">
                  <img :src="getTeamLogo(match.team1)" :alt="match.team1" class="w-10 h-10 object-contain mr-3">
                  <span class="font-medium">{{ getTeamFullName(match.team1) }}</span>
                </div>
                <span class="text-gray-500 font-bold mx-2">VS</span>
                <div class="flex items-center">
                  <span class="font-medium">{{ getTeamFullName(match.team2) }}</span>
                  <img :src="getTeamLogo(match.team2)" :alt="match.team2" class="w-10 h-10 object-contain ml-3">
                </div>
              </div>
              
              <div class="flex items-center text-sm text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {{ match.venue }}
              </div>
            </div>
            <div class="p-4 bg-gray-50 flex justify-between items-center">
              <span class="text-sm font-medium text-gray-700">{{ formatDate(match.date) }}</span>
              <button 
                @click="openBookingModal(match)"
                class="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm font-medium">
                Book Tickets
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Playoffs Section -->
      <div class="mb-12">
        <h2 class="text-2xl font-semibold mb-6 text-center bg-gray-100 py-2 rounded-lg">Playoffs</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div v-for="(match, index) in playoffMatches" :key="'playoff-'+index" class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border-2 border-yellow-400">
            <div class="p-5 border-b border-gray-200">
              <div class="flex justify-between items-center mb-3">
                <span class="text-xs font-semibold px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">{{ match.match }}</span>
                <span class="text-xs text-gray-500 flex items-center">{{ match.time }}</span>
              </div>
              
              <div class="text-center mb-4">
                <div class="text-lg font-bold text-gray-800">{{ match.match }}</div>
                <div class="text-sm text-gray-600 mt-1">IPL 2025 Playoffs</div>
              </div>
              
              <div class="flex items-center justify-center text-sm text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {{ match.venue }}
              </div>
            </div>
            <div class="p-4 bg-gray-50 flex justify-between items-center">
              <span class="text-sm font-medium text-gray-700">{{ formatDate(match.date) }}</span>
              <button 
                @click="openBookingModal(match)"
                class="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm font-medium">
                Book Tickets
              </button>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Booking Modal -->
      <div v-if="showBookingModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-white rounded-lg w-full max-w-md mx-4">
          <div class="p-6">
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-xl font-bold">Book Tickets</h3>
              <button @click="closeBookingModal" class="text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div class="mb-6">
              <div class="flex items-center mb-2">
                <img :src="getTeamLogo(selectedMatch.team1)" :alt="selectedMatch.team1" class="w-8 h-8 object-contain mr-2">
                <span class="font-medium">{{ getTeamFullName(selectedMatch.team1) }}</span>
                <span class="mx-2 font-bold">vs</span>
                <img :src="getTeamLogo(selectedMatch.team2)" :alt="selectedMatch.team2" class="w-8 h-8 object-contain mr-2">
                <span class="font-medium">{{ getTeamFullName(selectedMatch.team2) }}</span>
              </div>
              <div class="text-sm text-gray-600 mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {{ selectedMatch.venue }}
              </div>
              <div class="text-sm text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {{ formatDate(selectedMatch.date) }}, {{ selectedMatch.time }}
              </div>
            </div>
            
            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700 mb-1">Ticket Category</label>
              <select v-model="selectedCategory" class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500">
                <option v-for="(category, index) in ticketCategories" :key="index" :value="index">
                  {{ category.name }} - ₹{{ category.price }} ({{ category.description }})
                </option>
              </select>
            </div>
            
            <div class="mb-6">
              <label class="block text-sm font-medium text-gray-700 mb-1">Number of Tickets</label>
              <div class="flex items-center">
                <button @click="decrementTickets" class="bg-gray-200 px-3 py-1 rounded-l-md hover:bg-gray-300">-</button>
                <input type="number" v-model.number="numberOfTickets" min="1" max="10" class="border-t border-b border-gray-300 text-center w-12 py-1">
                <button @click="incrementTickets" class="bg-gray-200 px-3 py-1 rounded-r-md hover:bg-gray-300">+</button>
              </div>
            </div>
            
            <div class="bg-gray-100 p-4 rounded-md mb-6">
              <div class="flex justify-between mb-2">
                <span class="text-gray-600">Ticket Price:</span>
                <span>₹{{ ticketCategories[selectedCategory].price * numberOfTickets }}</span>
              </div>
              <div class="flex justify-between mb-2">
                <span class="text-gray-600">Convenience Fee:</span>
                <span>₹{{ convenienceFee }}</span>
              </div>
              <div class="flex justify-between font-semibold">
                <span>Total:</span>
                <span>₹{{ (ticketCategories[selectedCategory].price * numberOfTickets) + convenienceFee }}</span>
              </div>
            </div>
            
            <button @click="proceedToPayment" class="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition-colors">
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
      
      <!-- Payment Modal -->
      <div v-if="showPaymentModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-white rounded-lg w-full max-w-md mx-4">
          <div class="p-6">
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-xl font-bold">Payment</h3>
              <button @click="closePaymentModal" class="text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div class="mb-6">
              <div class="text-lg font-medium mb-2">Order Summary</div>
              <div class="text-sm text-gray-600 mb-1">{{ getTeamFullName(selectedMatch.team1) }} vs {{ getTeamFullName(selectedMatch.team2) }}</div>
              <div class="text-sm text-gray-600 mb-1">{{ selectedMatch.venue }}</div>
              <div class="text-sm text-gray-600 mb-4">{{ formatDate(selectedMatch.date) }}, {{ selectedMatch.time }}</div>
              
              <div class="border-t border-gray-200 pt-4">
                <div class="flex justify-between mb-2">
                  <span>{{ numberOfTickets }} × {{ ticketCategories[selectedCategory].name }} Ticket</span>
                  <span>₹{{ ticketCategories[selectedCategory].price * numberOfTickets }}</span>
                </div>
                <div class="flex justify-between mb-2">
                  <span>Convenience Fee</span>
                  <span>₹{{ convenienceFee }}</span>
                </div>
                <div class="flex justify-between font-semibold border-t border-gray-200 pt-2 mt-2">
                  <span>Total Amount</span>
                  <span>₹{{ (ticketCategories[selectedCategory].price * numberOfTickets) + convenienceFee }}</span>
                </div>
              </div>
            </div>
            
            <div class="mb-6">
              <label class="block text-sm font-medium text-gray-700 mb-2">Select Payment Method</label>
              <div class="space-y-3">
                <div v-for="(method, index) in paymentMethods" :key="index" 
                     @click="selectedPaymentMethod = index"
                     :class="['border rounded-md p-3 cursor-pointer', selectedPaymentMethod === index ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-gray-400']">
                  <div class="flex items-center">
                    <img :src="method.icon" :alt="method.name" class="w-8 h-8 object-contain mr-3">
                    <span>{{ method.name }}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <button @click="processPayment" class="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition-colors">
              Pay ₹{{ (ticketCategories[selectedCategory].price * numberOfTickets) + convenienceFee }}
            </button>
          </div>
        </div>
      </div>
      
      <!-- Success Modal -->
      <div v-if="showSuccessModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-white rounded-lg w-full max-w-md mx-4">
          <div class="p-6 text-center">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h3 class="text-xl font-bold mb-2">Payment Successful!</h3>
            <p class="text-gray-600 mb-6">Your tickets have been booked successfully.</p>
            
            <div class="bg-gray-100 p-4 rounded-md mb-6 text-left">
              <div class="font-medium mb-2">Booking Details</div>
              <div class="text-sm text-gray-600 mb-1">{{ getTeamFullName(selectedMatch.team1) }} vs {{ getTeamFullName(selectedMatch.team2) }}</div>
              <div class="text-sm text-gray-600 mb-1">{{ selectedMatch.venue }}</div>
              <div class="text-sm text-gray-600 mb-1">{{ formatDate(selectedMatch.date) }}, {{ selectedMatch.time }}</div>
              <div class="text-sm text-gray-600 mb-1">{{ numberOfTickets }} × {{ ticketCategories[selectedCategory].name }} Ticket</div>
              <div class="text-sm font-medium mt-2">Booking ID: IPL-{{ Math.floor(Math.random() * 1000000) }}</div>
            </div>
            
            <button @click="closeSuccessModal" class="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition-colors">
              Done
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
    </main>

    <!-- Booking Modal -->
    <!-- <div v-if="showBookingModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
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
    </div> -->

    


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

<!-- <script>
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
          team1Logo: '/src/components/img/download__2_-removebg-preview.png',
          team2: 'CSK',
          team2Logo: '/src/components/img/download__2_-removebg-preview (1).png',
          venue: 'Wankhede Stadium, Mumbai'
        },
        {
          id: 2,
          matchNo: 'Match 2',
          date: 'Sun, 23 Mar 2025',
          time: '3:30 PM',
          team1: 'RCB',
          team1Logo: '/src/components/img/RCB-removebg-preview.png',
          team2: 'KKR',
          team2Logo: '/src/components/img/download__3_-removebg-preview.png',
          venue: 'M. Chinnaswamy Stadium, Bengaluru'
        },
        {
          id: 3,
          matchNo: 'Match 3',
          date: 'Mon, 24 Mar 2025',
          time: '7:30 PM',
          team1: 'DC',
          team1Logo: '/src/components/img/download__1_-removebg-preview (1).png',
          team2: 'PBKS',
          team2Logo: '/src/components/img/download__4_-removebg-preview.png',
          venue: 'Arun Jaitley Stadium, Delhi'
        },
        {
          id: 4,
          matchNo: 'Match 4',
          date: 'Tue, 25 Mar 2025',
          time: '7:30 PM',
          team1: 'GT',
          team1Logo: '/src/components/img/download-removebg-preview (9).png',
          team2: 'LSG',
          team2Logo: '/src/components/img/download__1_-removebg-preview.png',
          venue: 'Narendra Modi Stadium, Ahmedabad'
        },
        {
          id: 5,
          matchNo: 'Match 5',
          date: 'Tue, 25 Mar 2025',
          time: '7:30 PM',
          team1: 'GT',
          team1Logo: '/src/components/img/download-removebg-preview (9).png',
          team2: 'LSG',
          team2Logo: '/src/components/img/download__1_-removebg-preview.png',
          venue: 'Narendra Modi Stadium, Ahmedabad'
        }
      ],
      teams: [
        { id: 1, name: 'Mumbai Indians', logo: '/src/components/img/download__2_-removebg-preview.png' },
        { id: 2, name: 'Chennai Super Kings', logo: '/src/components/img/download__2_-removebg-preview (1).png' },
        { id: 3, name: 'Royal Challengers', logo: '/src/components/img/RCB-removebg-preview.png' },
        { id: 4, name: 'Kolkata Knight Riders', logo: '/src/components/img/download__3_-removebg-preview.png' },
        { id: 5, name: 'Delhi Capitals', logo: '/src/components/img/download__1_-removebg-preview (1).png' },
        { id: 6, name: 'Punjab Kings', logo: '/src/components/img/download__4_-removebg-preview.png' },
        { id: 7, name: 'Rajasthan Royals', logo: '/src/components/img/download-removebg-preview (7).png' },
        { id: 8, name: 'Sunrisers Hyderabad', logo: '/src/components/img/download-removebg-preview (8).png' },
        { id: 9, name: 'Gujarat Titans', logo: '/src/components/img/download-removebg-preview (9).png' },
        { id: 10, name: 'Lucknow Super Giants', logo: '/src/components/img/download__1_-removebg-preview.png' }
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
</script> -->

<script>
  export default {
    name: 'IPL2025Schedule',
    data() {
      return {
        leagueMatches: [
          { date: 'April 10', time: '7:30 PM', team1: 'RCB', team2: 'DC', venue: 'Bengaluru' },
          { date: 'April 11', time: '7:30 PM', team1: 'CSK', team2: 'KKR', venue: 'Chennai' },
          { date: 'April 12', time: '3:30 PM', team1: 'LSG', team2: 'GT', venue: 'Lucknow' },
          { date: 'April 12', time: '7:30 PM', team1: 'SRH', team2: 'PBKS', venue: 'Hyderabad' },
          { date: 'April 13', time: '3:30 PM', team1: 'RR', team2: 'RCB', venue: 'Jaipur' },
          { date: 'April 13', time: '7:30 PM', team1: 'DC', team2: 'MI', venue: 'Delhi' },
          { date: 'April 14', time: '7:30 PM', team1: 'LSG', team2: 'CSK', venue: 'Lucknow' },
          { date: 'April 15', time: '7:30 PM', team1: 'PBKS', team2: 'KKR', venue: 'New Chandigarh' },
          { date: 'April 16', time: '7:30 PM', team1: 'DC', team2: 'RR', venue: 'Delhi' },
          { date: 'April 17', time: '7:30 PM', team1: 'MI', team2: 'SRH', venue: 'Mumbai' },
          { date: 'April 18', time: '7:30 PM', team1: 'RCB', team2: 'PBKS', venue: 'Bengaluru' },
          { date: 'April 19', time: '3:30 PM', team1: 'GT', team2: 'DC', venue: 'Ahmedabad' },
          { date: 'April 19', time: '7:30 PM', team1: 'RR', team2: 'LSG', venue: 'Jaipur' },
          { date: 'April 20', time: '3:30 PM', team1: 'PBKS', team2: 'RCB', venue: 'New Chandigarh' },
          { date: 'April 20', time: '7:30 PM', team1: 'MI', team2: 'CSK', venue: 'Mumbai' },
          { date: 'April 21', time: '7:30 PM', team1: 'KKR', team2: 'GT', venue: 'Kolkata' },
          { date: 'April 22', time: '7:30 PM', team1: 'LSG', team2: 'DC', venue: 'Lucknow' },
          { date: 'April 23', time: '7:30 PM', team1: 'SRH', team2: 'MI', venue: 'Hyderabad' },
          { date: 'April 24', time: '7:30 PM', team1: 'RCB', team2: 'RR', venue: 'Bengaluru' },
          { date: 'April 25', time: '7:30 PM', team1: 'CSK', team2: 'SRH', venue: 'Chennai' },
          { date: 'April 26', time: '7:30 PM', team1: 'GT', team2: 'KKR', venue: 'Ahmedabad' },
          { date: 'April 27', time: '3:30 PM', team1: 'RR', team2: 'DC', venue: 'Jaipur' },
          { date: 'April 27', time: '7:30 PM', team1: 'PBKS', team2: 'LSG', venue: 'New Chandigarh' },
          { date: 'April 28', time: '7:30 PM', team1: 'MI', team2: 'GT', venue: 'Mumbai' },
          { date: 'April 29', time: '7:30 PM', team1: 'KKR', team2: 'CSK', venue: 'Kolkata' },
          { date: 'April 30', time: '7:30 PM', team1: 'DC', team2: 'RCB', venue: 'Delhi' }
        ],
        playoffMatches: [
          { date: 'May 24', time: '7:30 PM', match: 'Qualifier 1', venue: 'Hyderabad' },
          { date: 'May 25', time: '7:30 PM', match: 'Eliminator', venue: 'Hyderabad' },
          { date: 'May 27', time: '7:30 PM', match: 'Qualifier 2', venue: 'Kolkata' },
          { date: 'May 29', time: '7:30 PM', match: 'Final', venue: 'Kolkata' }
        ],
        teams: [
          { short: 'MI', name: 'Mumbai Indians', logo: '/src/components/img/download__2_-removebg-preview.png' },
          { short: 'CSK', name: 'Chennai Super Kings', logo: '/src/components/img/download__2_-removebg-preview (1).png' },
          { short: 'RCB', name: 'Royal Challengers Bangalore', logo: '/src/components/img/RCB-removebg-preview.png' },
          { short: 'KKR', name: 'Kolkata Knight Riders', logo: '/src/components/img/download__3_-removebg-preview.png' },
          { short: 'DC', name: 'Delhi Capitals', logo: '/src/components/img/download__1_-removebg-preview (1).png' },
          { short: 'PBKS', name: 'Punjab Kings', logo: '/src/components/img/download__4_-removebg-preview.png' },
          { short: 'RR', name: 'Rajasthan Royals', logo: '/src/components/img/download-removebg-preview (7).png' },
          { short: 'SRH', name: 'Sunrisers Hyderabad', logo: '/src/components/img/download-removebg-preview (8).png' },
          { short: 'GT', name: 'Gujarat Titans', logo: '/src/components/img/download-removebg-preview (9).png' },
          { short: 'LSG', name: 'Lucknow Super Giants', logo: '/src/components/img/download__1_-removebg-preview.png' }
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
          { name: 'Credit Card', icon: 'https://cdn-icons-png.flaticon.com/512/179/179457.png' },
          { name: 'Debit Card', icon: 'https://cdn-icons-png.flaticon.com/512/179/179457.png' },
          { name: 'Net Banking', icon: 'https://cdn-icons-png.flaticon.com/512/3652/3652191.png' },
          { name: 'UPI', icon: 'https://cdn-icons-png.flaticon.com/512/825/825454.png' }
        ],
        selectedPaymentMethod: 0
      }
    },
    methods: {
      getTeamFullName(shortName) {
        const team = this.teams.find(t => t.short === shortName);
        return team ? team.name : shortName;
      },
      getTeamLogo(shortName) {
        const team = this.teams.find(t => t.short === shortName);
        return team ? team.logo : '/team-logos/default.png';
      },
      formatDate(dateStr) {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const [month, day] = dateStr.split(' ');
        const monthIndex = months.findIndex(m => m === month);
        const date = new Date(2025, monthIndex, parseInt(day));
        return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
      },
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
        if (this.numberOfTickets < 10) {
          this.numberOfTickets++;
        }
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