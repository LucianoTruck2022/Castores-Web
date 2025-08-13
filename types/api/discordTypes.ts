interface Member {
    id: string;
    avatar: string | null;
    joined_at: Date | null;
    nick: string | null;
    rolesNames: string[];
}

interface Role {
    id: string;
    name: string;
    color: number;
    members: Member[];
}

export { Member, Role };
