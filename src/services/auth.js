import { mockTickets } from '../data/tickets';

// Key names for localStorage
const TICKETS_KEY = 'osc_custom_tickets';
const ACCOUNTS_KEY = 'osc_user_accounts';
const SESSION_KEY = 'osc_user_session';

// Helper to get custom tickets from storage
function getCustomTickets() {
  try {
    const data = localStorage.getItem(TICKETS_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error('Failed to parse custom tickets', e);
    return [];
  }
}

// Helper to get accounts from storage
function getAccounts() {
  try {
    const data = localStorage.getItem(ACCOUNTS_KEY);
    return data ? JSON.parse(data) : {};
  } catch (e) {
    console.error('Failed to parse accounts', e);
    return {};
  }
}

/**
 * Authentication Service
 * Abstracted methods to easily swap out LocalStorage for a real database (e.g., Supabase, Firebase) in the future.
 */
export const AuthService = {
  /**
   * Search for a ticket by email (checks mock DB and custom tickets)
   */
  findTicketByEmail(email) {
    const cleanEmail = email.toLowerCase().trim();
    
    // 1. Check in hardcoded mock tickets
    const mockMatch = mockTickets.find(t => t.email.toLowerCase() === cleanEmail);
    if (mockMatch) return mockMatch;

    // 2. Check in dynamic custom tickets (registered demo passes)
    const customTickets = getCustomTickets();
    const customMatch = customTickets.find(t => t.email.toLowerCase() === cleanEmail);
    if (customMatch) return customMatch;

    return null;
  },

  /**
   * Register a new custom attendee ticket (for demo/testing flow)
   */
  createDemoTicket(name, email, company, role) {
    const cleanEmail = email.toLowerCase().trim();
    
    // Check if ticket already exists
    if (this.findTicketByEmail(cleanEmail)) {
      throw new Error('A ticket is already registered with this email ID.');
    }

    const randomID = Math.floor(10000 + Math.random() * 90000);
    const newTicket = {
      email: cleanEmail,
      name: name.trim(),
      ticketNo: `OSC-2026-${randomID}`,
      tier: 'General Pass',
      company: company.trim() || 'Self-Employed',
      role: role.trim() || 'Developer'
    };

    const customTickets = getCustomTickets();
    customTickets.push(newTicket);
    localStorage.setItem(TICKETS_KEY, JSON.stringify(customTickets));

    return newTicket;
  },

  /**
   * Activate a ticket by setting a password
   */
  activateTicket(email, password) {
    const cleanEmail = email.toLowerCase().trim();
    const ticket = this.findTicketByEmail(cleanEmail);

    if (!ticket) {
      throw new Error('No ticket found for this email.');
    }

    const accounts = getAccounts();
    if (accounts[cleanEmail]) {
      throw new Error('This ticket has already been activated.');
    }

    accounts[cleanEmail] = {
      email: cleanEmail,
      password: password, // In a real DB, this would be hashed
      ticketInfo: ticket
    };

    localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(accounts));
    return ticket;
  },

  /**
   * Authenticate a user with email and password
   */
  login(email, password) {
    const cleanEmail = email.toLowerCase().trim();
    const accounts = getAccounts();
    const account = accounts[cleanEmail];

    if (!account) {
      throw new Error('No activated account found for this email. Please activate your ticket first.');
    }

    if (account.password !== password) {
      throw new Error('Incorrect password. Please try again.');
    }

    // Save user info (excluding password) to session
    const sessionUser = {
      ...account.ticketInfo,
      activatedAt: new Date().toISOString()
    };
    
    localStorage.setItem(SESSION_KEY, JSON.stringify(sessionUser));
    return sessionUser;
  },

  /**
   * Update profile details (e.g. Name, Company, Role, social links, custom themes, bookmarks)
   */
  updateProfile(email, updatedData) {
    const cleanEmail = email.toLowerCase().trim();
    const accounts = getAccounts();
    const account = accounts[cleanEmail];
    
    if (!account) {
      throw new Error('Account not found.');
    }

    // Merge ticketInfo/profile updates
    account.ticketInfo = {
      ...account.ticketInfo,
      ...updatedData
    };

    accounts[cleanEmail] = account;
    localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(accounts));

    // Update custom ticket list if the ticket exists there
    const customTickets = getCustomTickets();
    const customIdx = customTickets.findIndex(t => t.email.toLowerCase() === cleanEmail);
    if (customIdx !== -1) {
      customTickets[customIdx] = {
        ...customTickets[customIdx],
        ...updatedData
      };
      localStorage.setItem(TICKETS_KEY, JSON.stringify(customTickets));
    }

    // Update current session if the updated user is currently logged in
    const session = this.getCurrentUser();
    if (session && session.email.toLowerCase() === cleanEmail) {
      const updatedSession = {
        ...session,
        ...updatedData
      };
      localStorage.setItem(SESSION_KEY, JSON.stringify(updatedSession));
      return updatedSession;
    }

    return account.ticketInfo;
  },

  /**
   * Retrieve the current logged-in user session
   */
  getCurrentUser() {
    try {
      const data = localStorage.getItem(SESSION_KEY);
      return data ? JSON.parse(data) : null;
    } catch (e) {
      console.error('Failed to parse session', e);
      return null;
    }
  },

  /**
   * Clear the current session
   */
  logout() {
    localStorage.removeItem(SESSION_KEY);
  }
};
