export type AndroidType = {
  links: Links
  id: string
  neo_reference_id: string
  name: string
  nasa_jpl_url: string
  absolute_magnitude_h: number
  estimated_diameter: EstimatedDiameter
  is_potentially_hazardous_asteroid: boolean
  close_approach_data: CloseApproachData[]
  is_sentry_object: boolean
}

export type Links = {
  self: string
}

export type EstimatedDiameter = {
  kilometers: Kilometers
  meters: Meters
  miles: Miles
  feet: Feet
}

export type Kilometers = {
  estimated_diameter_min: number
  estimated_diameter_max: number
}

export type Meters = {
  estimated_diameter_min: number
  estimated_diameter_max: number
}

export type Miles = {
  estimated_diameter_min: number
  estimated_diameter_max: number
}

export type Feet = {
  estimated_diameter_min: number
  estimated_diameter_max: number
}

export type CloseApproachData = {
  close_approach_date: string
  close_approach_date_full: string
  epoch_date_close_approach: number
  relative_velocity: RelativeVelocity
  miss_distance: MissDistance
  orbiting_body: string
}

export type RelativeVelocity = {
  kilometers_per_second: string
  kilometers_per_hour: string
  miles_per_hour: string
}

export type MissDistance = {
  astronomical: string
  lunar: string
  kilometers: string
  miles: string
}
export type ModeType = 'km' | 'lunar'

export type CartContextType = {
  cart: AndroidType[]
  clearCart: () => void
  deleteFromCart: (id: string) => void
  addToCart: (asteroid: AndroidType) => void
}
