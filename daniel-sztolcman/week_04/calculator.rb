# num#World's crappiest but still accurate calculator
# Specification:

# A user should be given a menu of operations
# A user should be able to choose from the menu
# A user should be able to enter numbers to perform the operation on
# A user should be shown the result
# This process should continue until the user selects a quit option from the menu
# Phase 1

# Calculator functionality
# Calculator should be able to do basic arithmetic (+,-, *, /)
# Phase 2

# Advanced Calculator functionality
# Calculator should be able to do basic arithmetic (exponents, square roots)

# Phase 3

# User should be given a menu of Calculator functionality
# User should be able to choose intended functionality


def prompt(message)
	print message
	gets.chomp
end


def display_menu
	puts "(+) - add"
	puts "(-) - subtract"
	puts "(*) - multiply"
	puts "(/) - divide"
	puts "(^2) - square"
	puts "(^3) - cubed"
	puts "(^x) - power_of_x"
	puts "(sqrt) - sqrt"
	puts "(q) - quit"
	
end




def add
	a = prompt('Enter the first number: ').to_f
	b = prompt('Enter the second number: ').to_f
	puts "#{ a } + #{ b } = #{ a + b }"
end

def subtract
	a = prompt('Enter the first number: ').to_f
	b = prompt('Enter the second number: ').to_f
	puts "#{ a } - #{ b } = #{ a - b }"
end

def multiply
	a = prompt('Enter the first number: ').to_f
	b = prompt('Enter the second number: ').to_f
	puts "#{ a } * #{ b } = #{ a * b }"
end

def divide
	a = prompt('Enter the first number: ').to_f
	b = prompt('Enter the second number: ').to_f
	puts "#{ a } / #{ b } = #{ a / b }"
end

def square
	a = prompt('Enter the first number ').to_f
	puts "#{a} squared = #{a** 2}"
end

def cubed
	a = prompt('Enter the first number ').to_f
	puts "#{a} cubed = #{a** 3}"
end

def power_of_x
	a = prompt('Enter the first number: ').to_f
	b = prompt('Enter the second number: ').to_f
	puts "#{ a } to the power of #{ b } = #{ a ** b }"	
end

def sqrt
	a = prompt('Enter the first number: ').to_f
	puts "The square root of #{a} = #{Math.sqrt(a)}"
end

menu_choice = nil

until menu_choice == 'q'
	
	case menu_choice
	when '+'
		add
	when '-'
		subtract

	when '*'
		multiply

	when '/'
		divide

	when '^2'
		square

	when '^3'
		cubed

	when '^x'
		power_of_x
	when 'sqrt'
		sqrt

	else
		puts "Invalid selection"
	end

	display_menu
	menu_choice = prompt('Please neter your selection: ').downcase
end