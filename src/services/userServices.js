import api from "@/lib/axios";

export default {
    addUser(user) {
        return api.post("/users", user);
    },
    getAllUsers() {
        return api("/users");
    },
    deleteUser(id) {
        return api.delete(`/users/${id}`)
    },
    getUser(id) {
        return api(`/users/${id}`)
    },
    updateUser(id, user) {
        return api.put(`/users/${id}`, user)
    }
}