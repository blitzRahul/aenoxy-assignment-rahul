def preemptive_priority_scheduling(processes):
  """Calculates turnaround time and waiting time for processes using preemptive priority scheduling.

  Args:
      processes: A list of dictionaries containing process information (PID, CPU burst, arrival time, priority).

  Returns:
      A list of dictionaries with additional turnaround time and waiting time for each process.
  """
  processes.sort(key=lambda p: p['arrival_time'])  # Sort by arrival time
  n = len(processes)
  current_time = 0
  completed_processes = []

  while processes:
    # Find the highest priority process among ready processes
    ready_processes = [p for p in processes if p['arrival_time'] <= current_time]
    highest_priority = max(ready_processes, key=lambda p: p['priority'])

    # Execute the highest priority process
    completed_time = min(current_time + highest_priority['cpu_burst'],
                         [p['arrival_time'] for p in processes if p['arrival_time'] > current_time][0] if processes else float('inf'))
    highest_priority['turnaround_time'] = completed_time - highest_priority['arrival_time']
    highest_priority['waiting_time'] = highest_priority['turnaround_time'] - highest_priority['cpu_burst']
    current_time = completed_time
    completed_processes.append(highest_priority)
    processes.remove(highest_priority)

    # Check for new arrivals with higher priority
    new_arrivals = [p for p in processes if p['arrival_time'] <= current_time and p['priority'] > highest_priority['priority']]
    if new_arrivals:
      processes.append(highest_priority)
      processes.extend(new_arrivals)
      highest_priority = None  # Re-evaluate highest priority in the next iteration

  # Calculate Waiting Time for Remaining Processes (if any)
  for process in processes:
    process['turnaround_time'] = current_time - process['arrival_time']
    process['waiting_time'] = process['turnaround_time'] - process['cpu_burst']

  return completed_processes

# Example Usage (replace with your actual data)
process_data = [
  {'PID': 'P0', 'CPU Burst': 4, 'Arrival Time': 1, 'Priority': 5},
  {'PID': 'P1', 'CPU Burst': 4, 'Arrival Time': 2, 'Priority': 1},
  {'PID': 'P2', 'CPU Burst': 6, 'Arrival Time': 3, 'Priority': 6},
  {'PID': 'P3', 'CPU Burst': 1, 'Arrival Time': 0, 'Priority': 4},
  {'PID': 'P4', 'CPU Burst': 2, 'Arrival Time': 4, 'Priority': 7},
  {'PID': 'P5', 'CPU Burst': 3, 'Arrival Time': 5, 'Priority': 8},
]

results = preemptive_priority_scheduling(process_data.copy())  # Avoid modifying original data

# Print results (modify as needed)
for process in results:
  print(f"Process {process['PID']}:")
  print(f"  Turnaround Time: {process['turnaround_time']}")
  print(f"  Waiting Time: {process['waiting_time']}")
