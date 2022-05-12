package com.ticket.demo.model;

public class EntityField {

	private String name; 
	
	private String type;

	public EntityField(String name, String type) {
		this.name = name;
		this.type = type;
	}

	public String getName() {
		return name;
	}

	public String getType() {
		return type;
	}

	@Override
	public String toString() {
		return "EntityField [name=" + name + ", type=" + type + "]";
	}
	
	
}
