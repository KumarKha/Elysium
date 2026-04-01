package com.elysium.server.models;

import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import jakarta.persistence.*;

public class Booking {
  private String customerFirstName;
  private String customerLastName;

  private LocalDateTime requestedBookingTime;
  @CreationTimestamp
  private LocalDateTime bookingCreationDate;
  @UpdateTimestamp
  private LocalDateTime bookingUpdateDate;
  @Id
  @GeneratedValue(strategy = GenerationType.UUID)
  private long bookingID;

  public enum Status {
    OPEN,
    CLOSED,
    PENDING
  }

  @Enumerated(EnumType.STRING)
  private Status bookingStatus;

  @ManyToOne
  @JoinColumn(name = "realtorId", nullable = true)
  private Realtor assignedRealtor;

  public Booking() {
  }

  public void setCustomerFirstName(String firstName) {
    this.customerFirstName = firstName;
  }

  public void setCustomerLastName(String lastName) {
    this.customerLastName = lastName;
  }

  public void setBookingTime(LocalDateTime bookingTime) {
    this.requestedBookingTime = bookingTime;
  }

  public void setBookingStatus(String status) {
    try {
      this.bookingStatus = Status.valueOf(status.toUpperCase());
    } catch (IllegalArgumentException | NullPointerException e) {
      throw new IllegalArgumentException(
          "Invalid status. Must be one of: OPEN, CLOSED, PENDING");
    }
  }

  public String getCustomerFirstName() {
    return customerFirstName;
  }

  public String getCustomerLastName() {
    return customerLastName;
  }

  public LocalDateTime getBookingTime() {
    return requestedBookingTime;
  }

  public Status getBookingStatus() {
    return bookingStatus;
  }

  public long getBookingId() {
    return bookingID;
  }
}
