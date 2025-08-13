export interface Event {
    error: boolean;
    response: EventResponse[];
}

export interface EventResponse {
    id: number;
    event_type: EventType;
    name: string;
    slug: string;
    game: string;
    server: Server;
    language: string;
    departure: Arrive;
    arrive: Arrive;
    start_at: Date;
    banner: string;
    map: string;
    description: string;
    rule: null;
    voice_link: string;
    external_link: string;
    featured: string;
    vtc: Server;
    user: User;
    attendances: Attendances;
    dlcs: any[];
    url: string;
    created_at: Date;
    updated_at: Date;
}

export interface Arrive {
    location: string;
    city: string;
}

export interface Attendances {
    confirmed: number;
    unsure: number;
    vtcs: number;
}

export interface EventType {
    key: string;
    name: string;
}

export interface Server {
    id: number;
    name: string;
}

export interface User {
    id: number;
    username: string;
}
