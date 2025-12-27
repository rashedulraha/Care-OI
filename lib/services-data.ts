export interface Service {
  id: string
  name: string
  shortDescription: string
  description: string
  icon: string
  features: string[]
  hourlyRate: number
  dailyRate: number
  imageQuery: string
}

export const services: Record<string, Service> = {
  "baby-care": {
    id: "baby-care",
    name: "Baby Care",
    shortDescription: "Expert care for infants and toddlers with experienced nannies",
    description:
      "Our baby care service provides professional, loving care for your little ones. Our experienced nannies are trained in infant care, child development, and safety protocols to ensure your baby receives the best possible care.",
    icon: "baby",
    features: [
      "Newborn to 5 years old coverage",
      "Certified and trained professionals",
      "Flexible hourly or daily rates",
      "Feeding and diaper changing assistance",
      "Playtime and developmental activities",
      "Sleep routine management",
      "Basic first aid certified",
      "Background checked caregivers",
    ],
    hourlyRate: 300,
    dailyRate: 2000,
    imageQuery: "professional nanny caring for baby",
  },
  "elderly-care": {
    id: "elderly-care",
    name: "Elderly Care",
    shortDescription: "Compassionate support for seniors with dignity and respect",
    description:
      "Our elderly care service offers dignified, compassionate support for seniors. We help with daily living activities, provide companionship, and ensure your loved ones maintain their quality of life in the comfort of their home.",
    icon: "users",
    features: [
      "Daily living assistance (bathing, dressing, grooming)",
      "Companionship and social engagement",
      "Medication reminders and management",
      "Light housekeeping and meal preparation",
      "Mobility and transfer assistance",
      "Doctor appointment accompaniment",
      "Dementia and Alzheimer's care experience",
      "Respectful and patient caregivers",
    ],
    hourlyRate: 350,
    dailyRate: 2500,
    imageQuery: "caregiver helping elderly person",
  },
  "sick-care": {
    id: "sick-care",
    name: "Sick People Service",
    shortDescription: "Professional medical care assistance for patients at home",
    description:
      "Our sick people service provides professional medical care assistance for patients recovering at home. Our caregivers are trained to support post-surgery recovery, chronic illness management, and provide compassionate care during difficult times.",
    icon: "heart-pulse",
    features: [
      "Post-surgery recovery support",
      "Chronic illness management",
      "24/7 care options available",
      "Vital signs monitoring",
      "Medication administration assistance",
      "Wound care and dressing changes",
      "Physical therapy support",
      "Medical equipment assistance",
    ],
    hourlyRate: 400,
    dailyRate: 3000,
    imageQuery: "healthcare worker caring for patient at home",
  },
}

export const divisions = ["Dhaka", "Chattogram", "Rajshahi", "Khulna", "Barishal", "Sylhet", "Rangpur", "Mymensingh"]

export const districts: Record<string, string[]> = {
  Dhaka: ["Dhaka", "Gazipur", "Narayanganj", "Tangail", "Manikganj"],
  Chattogram: ["Chattogram", "Cox's Bazar", "Cumilla", "Feni", "Noakhali"],
  Rajshahi: ["Rajshahi", "Bogura", "Pabna", "Sirajganj", "Natore"],
  Khulna: ["Khulna", "Jessore", "Satkhira", "Bagerhat", "Kushtia"],
  Barishal: ["Barishal", "Patuakhali", "Barguna", "Bhola", "Pirojpur"],
  Sylhet: ["Sylhet", "Moulvibazar", "Habiganj", "Sunamganj"],
  Rangpur: ["Rangpur", "Dinajpur", "Nilphamari", "Kurigram", "Thakurgaon"],
  Mymensingh: ["Mymensingh", "Jamalpur", "Netrokona", "Sherpur"],
}

export const areas: Record<string, string[]> = {
  Dhaka: ["Dhanmondi", "Gulshan", "Banani", "Mohammadpur", "Mirpur", "Uttara", "Motijheel"],
  Gazipur: ["Tongi", "Kaliakair", "Sreepur", "Kapasia"],
  Narayanganj: ["Fatullah", "Siddhirganj", "Bandar", "Rupganj"],
  Chattogram: ["Agrabad", "Panchlaish", "Halishahar", "Kotwali", "Pahartali"],
  Rajshahi: ["Boalia", "Matihar", "Rajpara", "Shaheb Bazar"],
}
