package com.elysium.server.models;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.*;

public class Realtor {
    private String firstName;
    private String lastName;

    private String email;
    private String phoneNumber;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long realtorId;

    @OneToMany(mappedBy = "assignedRealtor")
    private List<Booking> bookings = new ArrayList<>();

}
