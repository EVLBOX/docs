---
title: "How to Schedule Automatic Server Start"
description: "How to setup automatic server start on your palworld server"
---

# How to Schedule Automatic Server Starts
Several people have been experiencing issues from memory leaks, one potential fix for this is to create a schedule to automatically start the server every 8-12 hours. 
If patches or new versions are released, your server will need to be restarted. You can also schedule automatic restarts to run at a specific time each day. 


## How to Create a Scheudule 
1. Log in to the nitro panel and click on Schedules. 
2. Click Create Schedule 
	
  - Enter in a schedule name
  - Enter a number value for minutes (0-59) It will run at this many minutes past the hour
  - The number of hours for how often you want the task to run (i.e. */8 )
  - Unselect "Only when the server is online"
	- Click Create
  
![server_start_8_hours.png](/palworld/server_start_8_hours.png)

3. You will now see the schedule displayed on the screen 

![active_schedule_15.png](/palworld/active_schedule_15.png)

4. Click on the schedule and create a new task 
	
  - Select Send power action
  - Under Payload, select Start the server
  - Create the task 

![create_start_task_2.png](/palworld/create_start_task_2.png)

5. The panel will now show the schedule, when it is set to run next, and the action it will perform. You can manually run the task from this panel. Or if you would like to have it run at a different time, you can edit the schedule or delete it if no longer needed. 

![active_start_schedule_run_2.png](/palworld/active_start_schedule_run_2.png)


## How to Create a Schedule to run at the same time everyday
If the developer releases updates or changes around the same time of day for your game, you may want to create a schedule to restart your server automatically so the changes get applied before you try to log in. 
1. If you would like to have a set time for when your server restarts run, you can also enter in a specific time using a 24 hour clock.
2. For example if you would like your server to restart at 8:15 am every day, Remove any asterisks from the field and enter 15, and 8 in the minute and hour fields. If you would like to have it run at 8:15 pm, enter a 15, and 20 in the minute and hour fields. 

![schedule_same_time.png](/palworld/schedule_same_time.png)

3. Click create schedule and if you click on the details, the "Next Run" will confirm the time you have entered. 
4. Add a task to send power action to start or restart your server. 