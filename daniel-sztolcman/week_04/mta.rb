# Title: MTA Lab
# Activity:

# Students should create a program that models a simple subway system.

# The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the total number of stops for the trip.

# There are 3 subway lines:
# The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
# The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
# The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
# All 3 subway lines intersect at Union Square, but there are no other intersection points.
# For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.
# Hints:

# Don't worry about user input initially: get it working with hardcoded values first, and wire up the user interface once that's working
# Consider diagraming the lines by sketching out the subway lines and their stops and intersection.
# Make subway lines keys in a hash, while the values are an array of all the stops on each line.
# The key to the lab is to find the intersection of the lines at Union Square.
# Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)

require 'pry'
# mta needs to be a funciton in order to call mta[:line]

def mta
 {
	:line_N => [ "Times Square", "34th", "28th", "23rd", "Union Square", "8th" ],
	:line_L => [ "8th", "6th", "Union Square", "3rd", "1st" ],
	:line_6 => [ "Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place" ]
 }
end

def pick_line
	start_line = []
	while start_line.empty?
		print 'What is your starting line? ("L", "N", "6"): '
		start = gets.chomp.upcase
		start_line = mta[:line_L] if start == "L"
		start_line = mta[:line_N] if start == "N"
		start_line = mta[:line_6] if start == "6"
	end
	puts "The stations on Line #{start} are #{start_line.join', '}"
	return start_line
end

def pick_station start_line
	start_line_arr = start_line.to_a
	start_station = ""	
	while start_line.index(start_station).nil?
		print "What is the starting station? #{start_line}: "
		start_station = gets.chomp.split.map(&:capitalize)*' ' 
		#capitalize on it's own will only make the first word in a string have a capital letter
	end
	puts "The starting station is #{start_station}"
	start_index = start_line_arr.index(start_station)
	return start_index
end

def finishing_line
	finish_line = []
	while finish_line.empty?
		print 'What is your finishing line? ("L", "N", "6"): '
		finish = gets.chomp
		finish_line = mta[:line_L] if finish == "L"
		finish_line = mta[:line_N] if finish == "N"
		finish_line = mta[:line_6] if finish == "6"
	end
	puts "The stations on Line #{finish} are #{finish_line.join', '}"
	return finish_line
end

def finishing_station finish_line	
	finish_line_arr = finish_line.to_a
	finish_station = ""	
	while finish_line.index(finish_station).nil?
		print "What is the finishing station? #{finish_line}: "
		finish_station = gets.chomp.split.map(&:capitalize)*' '
		puts finish_station
	end
	puts "The finishing station is #{finish_station}"
	finish_index = finish_line_arr.index(finish_station)
	return finish_index
end

def first_line start_line, start_index, finish_line, finish_index
	if start_line == finish_line
		if start_index < finish_index
			
			start_leg = start_line[start_index..finish_index]
			first_stop = start_leg.shift
			
			puts "You need to pass through #{start_leg.join', '}. Number of stops #{start_leg.count}."
		
		elsif start_index > finish_index
			
			start_leg = start_line[finish_index..start_index].reverse
			first_stop = start_leg.shift
			
			puts "You need to pass through #{start_leg.join', '}. Number of stops #{start_leg.count}."
		
		else puts "That was quick... you finished where you started.."
		end
	else finish_index = start_line.index("Union Square")
		
		if start_index < finish_index
			start_leg = start_line[start_index..finish_index]
			first_stop = start_leg.shift
			
			puts "You need to pass through #{start_leg.join', '}. Number of stops: #{start_leg.count}."
		
		elsif start_index > finish_index
			
			start_leg = start_line[finish_index..start_index].reverse
			first_stop = start_leg.shift
			
			puts "You need to pass through #{start_leg.join', '}. Number of stops: #{start_leg.count}."
		
		
		end
	end
end

def second_line start_line, start_index, finish_line, finish_index
	if start_line == finish_line
		puts "You have reached your destination"
	elsif start_line != finish_line
		start_index = finish_line.index("Union Square")
			if finish_index < start_index
				finish_leg = finish_line[finish_index..start_index].reverse
				first_stop = finish_leg.shift

			puts "Change at Union Square. Your journey then continues through #{finish_leg.join', '}. Number of stops: #{finish_leg.count}"

			elsif finish_index > start_index
				finish_leg = finish_line[start_index..finish_index]
				first_stop = finish_leg.shift

				puts "Change at Union Square. Your journey then continues through #{finish_leg.join', '}. Number of stops: #{finish_leg.count}"

			else puts "You have reached your destination"
		end

	end
end
	




start_line = pick_line
start_index = pick_station start_line
finish_line = finishing_line
finish_index = finishing_station finish_line


first_line start_line, start_index, finish_line, finish_index
second_line start_line, start_index, finish_line, finish_index



binding.pry







